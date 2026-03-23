FROM node:20-alpine as base

RUN addgroup -g 1503 product-group && adduser -D -u 1503 -G product-group product-user

WORKDIR /product-service

COPY package.json .

COPY . .

RUN apk --no-cache add curl

RUN chown -R product-user:product-group /product-service

USER product-user

FROM base as dev

RUN chmod -R u+w tests && rm -r tests && rm jest.config.js jest-mongodb-config.js junit.xml .env.production && npm i

# RUN npm i

CMD ["npm", "run", "dev"]

EXPOSE 3000

FROM base as prod

RUN chmod -R u+w tests && rm -r tests && rm jest.config.js jest-mongodb-config.js junit.xml .env.dev && npm i --omit=dev

# RUN npm i --omit=dev

CMD ["npm", "run", "start"]

EXPOSE 3000