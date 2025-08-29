FROM nginx:latest

# Konfigurationen
COPY conf/* /etc/nginx/conf.d/

# (falls du noch eine einfache Single-Page unter html/ ausliefern willst)
COPY html/* /usr/share/nginx/html/

# NEU: die Multi-Page Sites
COPY sites/ /usr/share/nginx/sites/
