# Unprivileged non-root Nginx serving the modular ES-module slide deck on port 8080.
# Build from repository root:
#   docker build -f kind-deploy/Dockerfile -t kubecon-slides:full .
FROM nginxinc/nginx-unprivileged:1.27-alpine

COPY kind-deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/index.html
COPY styles/ /usr/share/nginx/html/styles/
COPY assets/ /usr/share/nginx/html/assets/
COPY app/ /usr/share/nginx/html/app/
COPY slides/ /usr/share/nginx/html/slides/
COPY notes/ /usr/share/nginx/html/notes/

USER 101
EXPOSE 8080
