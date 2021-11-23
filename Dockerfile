FROM nginx
COPY ./dist/bubble/ /usr/share/nginx/html/
RUN cat /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
RUN chmod -R 615 /usr/share/nginx/html/
EXPOSE 80