FROM node:20-alpine as base

RUN addgroup -g 1502 order-group && adduser -D -u 1502 -G order-group order-user

WORKDIR /order-service

COPY package.json .

COPY . .

RUN chown -R order-user:order-group /order-service

USER order-user

FROM base as dev

RUN  npm i && rm .env.production

EXPOSE 3002

CMD ["npm", "run", "dev"]

FROM base as prod

RUN  npm i --omit=dev && rm .env.dev

EXPOSE 3002

CMD ["npm", "run", "start"]