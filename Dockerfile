FROM nginx:latest

WORKDIR /etc/nginx/conf.d

COPY e-commerce.conf .

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]