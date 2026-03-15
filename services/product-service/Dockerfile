FROM node:25.8-alpine

WORKDIR /product-service

COPY package.json .

COPY . .

RUN apk add --no-cache curl

RUN npm i

CMD ["npm", "run", "dev"]

EXPOSE 3000