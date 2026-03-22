FROM node:20-alpine as base

RUN addgroup -g 1502 order-group && adduser -D -u 1502 -G order-group order-user

WORKDIR /order-service

COPY package.json .

COPY . .

RUN chown -R order-user:order-group /order-service

USER order-user

FROM base as dev

RUN chmod -R u+w tests && rm -r tests && rm jest.config.js .env.production && npm i

# RUN npm i

CMD ["npm", "run", "dev"]

EXPOSE 3002

FROM base as prod

RUN chmod -R u+w tests && rm -r tests && rm jest.config.js .env.dev && npm i --omit=dev

# RUN npm i --omit=dev

CMD ["npm", "run", "start"]

EXPOSE 3002