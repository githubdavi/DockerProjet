FROM node:20-alpine as base

RUN addgroup -g 1500 frontend-group && adduser -D -u 1500 -G frontend-group frontend-user

WORKDIR /frontend

COPY package.json .

COPY . .

RUN chown -R frontend-user:frontend-group /frontend

USER frontend-user

RUN npm i && chmod -R u+w tests

FROM base as dev

RUN rm -r /frontend/tests && rm vitest.config.js .env.production

CMD ["npm", "run", "dev"]

EXPOSE 8080

FROM base as build

RUN npm run build

FROM nginx:alpine as prod

RUN addgroup -g 1500 frontend-group && adduser -D -u 1500 -G frontend-group frontend-user

RUN chown -R frontend-user:frontend-group /var/cache/nginx \
    && chown -R frontend-user:frontend-group /run \
    && chown -R frontend-user:frontend-group /usr/share/nginx/html

# EXPOSE 8080

# RUN sed -i 's/listen       80;/listen       8080;/g' /etc/nginx/conf.d/default.conf

USER frontend-user

COPY --from=build /frontend/dist /usr/share/nginx/html

EXPOSE 8000