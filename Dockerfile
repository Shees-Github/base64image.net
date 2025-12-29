FROM nginx:alpine

# Copy static files to nginx html directory
COPY . /usr/share/nginx/html/

# Copy nginx configuration (optional, but recommended)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
