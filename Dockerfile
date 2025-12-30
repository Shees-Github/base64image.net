FROM php:8.2-fpm-alpine

# Install nginx
RUN apk add --no-cache nginx

# Copy nginx configuration
COPY nginx.conf /etc/nginx/http.d/default.conf

# Copy static files (includes API in public/api/)
COPY public/ /usr/share/nginx/html/

# Create directory for counter data with proper permissions
RUN mkdir -p /usr/share/nginx/html/api && \
    chown -R nginx:nginx /usr/share/nginx/html/api && \
    chmod -R 777 /usr/share/nginx/html/api

# Create PHP-FPM run directory
RUN mkdir -p /var/run/php

# Configure PHP-FPM to run as nginx user
RUN sed -i 's/user = www-data/user = nginx/g' /usr/local/etc/php-fpm.d/www.conf && \
    sed -i 's/group = www-data/group = nginx/g' /usr/local/etc/php-fpm.d/www.conf && \
    sed -i 's/listen = 127.0.0.1:9000/listen = \/var\/run\/php\/php-fpm.sock/g' /usr/local/etc/php-fpm.d/www.conf && \
    sed -i 's/;listen.owner = www-data/listen.owner = nginx/g' /usr/local/etc/php-fpm.d/www.conf && \
    sed -i 's/;listen.group = www-data/listen.group = nginx/g' /usr/local/etc/php-fpm.d/www.conf && \
    sed -i 's/;listen.mode = 0660/listen.mode = 0660/g' /usr/local/etc/php-fpm.d/www.conf

EXPOSE 80

# Start both PHP-FPM and nginx
CMD php-fpm -D && nginx -g "daemon off;"
