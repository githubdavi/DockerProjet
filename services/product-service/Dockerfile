FROM node:25.8-alpine as base

WORKDIR /product-service

COPY package.json .

COPY . .

RUN apk add --no-cache curl

FROM base as dev

RUN rm -r tests && rm jest.config.js jest-mongodb-config.js junit.xml .env.production && npm i

# RUN npm i

CMD ["npm", "run", "dev"]

EXPOSE 3000

FROM base as prod

RUN rm -r tests && rm jest.config.js jest-mongodb-config.js junit.xml .env.dev && npm i --omit=dev

# RUN npm i --omit=dev

CMD ["npm", "run", "start"]

EXPOSE 3000