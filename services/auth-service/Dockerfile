FROM node:20-alpine as base

RUN addgroup -g 1501 auth-group && adduser -D -u 1501 -G auth-group auth-user

WORKDIR /auth-service

COPY package.json .

COPY . .

RUN chown -R auth-user:auth-group /auth-service

USER auth-user

FROM base as dev

RUN  npm i &&rm .env.production

EXPOSE 3001

CMD ["npm", "run", "dev"]

FROM base as prod

RUN  npm i --omit=dev && rm .env.dev

EXPOSE 3001

CMD ["npm", "run", "start"]
