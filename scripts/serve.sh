#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PORT="${PORT:-8080}"

cat <<EOF
========================================================================
 KubeCon NA 2026 Local Dev Server (bound strictly to 127.0.0.1:${PORT})
========================================================================
  Overview + Nav:     http://127.0.0.1:${PORT}/
  Presenter Console:  http://127.0.0.1:${PORT}/?mode=speaker
  Audience Stage:     http://127.0.0.1:${PORT}/?mode=stage
========================================================================
EOF

cd "${REPO_ROOT}"
exec python3 -m http.server "${PORT}" --bind 127.0.0.1
