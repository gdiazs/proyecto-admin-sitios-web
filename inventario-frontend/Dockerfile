FROM nginx:stable-alpine3.17-slim

COPY ./conf/nginx.conf /etc/nginx/nginx.conf
COPY ./conf/ssl/ /etc/nginx/ssl/
COPY ./inventario-frontend/dist/ /usr/share/nginx/html

EXPOSE 443