FROM nginx

ADD ./html/*.html /usr/share/nginx/html/

ADD ./conf/*.conf /etc/nginx/conf.d/
