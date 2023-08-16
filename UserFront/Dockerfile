# Use the official NGINX image as the base image
FROM nginx:latest

# Remove the default NGINX configuration
RUN rm -v /etc/nginx/nginx.conf

# Copy your custom NGINX configuration
COPY ./nginx.conf /etc/nginx/


# Copy the contents of the current directory to the NGINX document root
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
