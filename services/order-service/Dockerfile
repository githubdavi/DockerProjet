FROM node:25-alpine as base

WORKDIR /order-service

COPY package.json .

COPY . .

FROM base as dev

RUN npm i

CMD ["npm", "run", "dev"]

EXPOSE 3002

FROM base as prod

RUN npm i --omit=dev

CMD ["npm", "run", "start"]

EXPOSE 3002