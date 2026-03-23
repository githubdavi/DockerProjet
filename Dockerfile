FROM nginx:alpine

WORKDIR /etc/nginx/conf.d

COPY e-commerce.conf .

RUN cp e-commerce.conf /etc/nginx/sites-available && rm default.conf

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]