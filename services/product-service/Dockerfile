FROM node:25.8-alpine as base

WORKDIR /product-service

COPY package.json .

COPY . .

RUN apk add --no-cache curl

FROM base as dev

RUN npm i

CMD ["npm", "run", "dev"]

EXPOSE 3000

FROM base as prod

RUN npm i --omit=dev

CMD ["npm", "run", "start"]

EXPOSE 3000