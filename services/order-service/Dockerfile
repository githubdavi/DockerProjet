FROM node:25-alpine as base

WORKDIR /order-service

COPY package.json .

COPY . .

FROM base as dev

RUN rm -r tests && rm jest.config.js .env.production && npm i

# RUN npm i

CMD ["npm", "run", "dev"]

EXPOSE 3002

FROM base as prod

RUN rm -r tests && rm jest.config.js .env.dev && npm i --omit=dev

# RUN npm i --omit=dev

CMD ["npm", "run", "start"]

EXPOSE 3002