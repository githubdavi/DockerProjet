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

EXPOSE 8080

CMD ["npm", "run", "dev"]

FROM base as build

RUN npm run build

FROM nginx:alpine as prod

RUN addgroup -g 1500 frontend-group && adduser -D -u 1500 -G frontend-group frontend-user

RUN chown -R frontend-user:frontend-group /var/cache/nginx \
    && chown -R frontend-user:frontend-group /run \
    && chown -R frontend-user:frontend-group /usr/share/nginx/html

USER frontend-user

COPY --from=build /frontend/dist /usr/share/nginx/html

EXPOSE 8000
