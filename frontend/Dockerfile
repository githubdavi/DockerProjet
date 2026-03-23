FROM node:20-alpine as base

RUN addgroup -g 1500 frontend-group && adduser -D -u 1500 -G frontend-group frontend-user

WORKDIR /frontend

COPY package.json .

RUN npm i

COPY . .

RUN chown -R frontend-user:frontend-group /frontend

USER frontend-user

FROM base as dev

RUN rm .env.production

CMD ["npm", "run", "dev"]

EXPOSE 8080

FROM base as build

RUN npm run build

FROM nginx:alpine as prod

RUN addgroup -g 1500 frontend-group && adduser -D -u 1500 -G frontend-group frontend-user

RUN chown -R frontend-user:frontend-group /var/cache/nginx \
    && chown -R frontend-user:frontend-group /run \
    && chown -R frontend-user:frontend-group /usr/share/nginx/html

RUN sed -i 's/\blisten       80\b/listen       8000/g' /etc/nginx/conf.d/default.conf

USER frontend-user

COPY --from=build /frontend/dist /usr/share/nginx/html

EXPOSE 8000

ENTRYPOINT ["nginx","-g","daemon off;"]