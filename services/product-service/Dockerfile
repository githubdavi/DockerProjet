FROM node:25.8-alpine

WORKDIR /product-service

COPY package.json .

COPY . .

RUN npm i

CMD ["npm", "run", "dev"]

EXPOSE 3000