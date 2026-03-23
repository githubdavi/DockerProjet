FROM node:20-alpine as base

RUN addgroup -g 1503 product-group && adduser -D -u 1503 -G product-group product-user

WORKDIR /product-service

COPY package.json .

COPY . .

RUN apk --no-cache add curl

RUN chown -R product-user:product-group /product-service

USER product-user

FROM base as dev

RUN npm i && rm .env.production

EXPOSE 3000

CMD ["npm", "run", "dev"]

FROM base as prod

RUN npm i --omit=dev && rm .env.dev

EXPOSE 3000

CMD ["npm", "run", "start"]
