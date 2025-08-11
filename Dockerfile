FROM nginx

ADD ./html/*.html /usr/share/nginx/html/
ADD ./sites /usr/share/nginx/sites

ADD ./conf/*.conf /etc/nginx/conf.d/
