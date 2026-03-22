FROM node:20-alpine as base

RUN addgroup -g 1501 auth-group && adduser -D -u 1501 -G auth-group auth-user

WORKDIR /auth-service

COPY package.json .

COPY . .

RUN chown -R auth-user:auth-group /auth-service

USER auth-user

FROM base as dev

RUN  npm i &&rm .env.production

CMD ["npm", "run", "dev"]

EXPOSE 3001

FROM base as prod

RUN  npm i --omit=dev && .env.dev

CMD ["npm", "run", "start"]

EXPOSE 3001