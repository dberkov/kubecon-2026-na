#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"

CLUSTER_NAME="kubecon-deck"
IMAGE_TAG="kubecon-slides:full"
NOTES_DIR="${REPO_ROOT}/notes"

for bin in docker kind kubectl python3; do
  if ! command -v "${bin}" >/dev/null 2>&1; then
    echo "Error: '${bin}' is not installed or not on PATH." >&2
    exit 1
  fi
done

if [[ ! -f "${NOTES_DIR}/speaker-notes.md" ]]; then
  echo "Error: Expected '${NOTES_DIR}/speaker-notes.md' to exist." >&2
  exit 1
fi

RENDERED_CFG="$(mktemp "${TMPDIR:-/tmp}/kind-config.XXXXXX.yaml")"
trap 'rm -f "${RENDERED_CFG}"' EXIT
python3 - "${SCRIPT_DIR}/kind-config.yaml" "${NOTES_DIR}" "${RENDERED_CFG}" <<'PY'
import sys
tpl_path, notes_dir, out_path = sys.argv[1], sys.argv[2], sys.argv[3]
with open(tpl_path, "r", encoding="utf-8") as f:
    tpl = f.read()
escaped = notes_dir.replace("\\", "\\\\").replace('"', '\\"')
with open(out_path, "w", encoding="utf-8") as out:
    out.write(tpl.replace("__HOST_NOTES_DIR__", f'"{escaped}"'))
PY

NEED_CREATE=0
if ! kind get clusters | grep -qx "${CLUSTER_NAME}"; then
  NEED_CREATE=1
elif ! docker inspect "${CLUSTER_NAME}-control-plane" --format '{{json .Mounts}}' 2>/dev/null | grep -q '"/host-notes"'; then
  echo "==> Recreating '${CLUSTER_NAME}' once to attach live '${NOTES_DIR}' host mount..."
  kind delete cluster --name "${CLUSTER_NAME}"
  NEED_CREATE=1
fi

if [[ "${NEED_CREATE}" -eq 1 ]]; then
  echo "==> Creating kind cluster '${CLUSTER_NAME}' (127.0.0.1:8080 + live notes mount)..."
  kind create cluster --name "${CLUSTER_NAME}" --config "${RENDERED_CFG}"
else
  echo "==> Reusing existing kind cluster '${CLUSTER_NAME}'..."
fi

echo "==> Building container image '${IMAGE_TAG}' from ${REPO_ROOT}..."
docker build -f "${SCRIPT_DIR}/Dockerfile" -t "${IMAGE_TAG}" "${REPO_ROOT}"

echo "==> Pre-loading '${IMAGE_TAG}' into kind (100% offline-safe)..."
kind load docker-image "${IMAGE_TAG}" --name "${CLUSTER_NAME}"

echo "==> Applying Kubernetes manifests..."
kubectl --context "kind-${CLUSTER_NAME}" apply -f "${SCRIPT_DIR}/k8s-manifest.yaml"
kubectl --context "kind-${CLUSTER_NAME}" -n kubecon-slides rollout restart deployment/kubecon-slides
kubectl --context "kind-${CLUSTER_NAME}" -n kubecon-slides rollout status deployment/kubecon-slides --timeout=60s

cat <<BANNER

========================================================================
 KubeCon NA 2026 Deck (29 Slides) Live on kind!
========================================================================
 1. Laptop Screen (Presenter Console + Notes + Timer + Next Preview):
    http://127.0.0.1:8080/?mode=speaker

 2. External Monitor / Projector (Clean 16:9 Stage — press F fullscreen):
    http://127.0.0.1:8080/?mode=stage

 3. Edit Speaker Notes Anytime (ZERO Docker Rebuilds!):
    Open ${NOTES_DIR}/speaker-notes.md in VS Code or Vim and hit Save —
    your Presenter Console auto-reloads changes within ~2 seconds!
========================================================================
BANNER
