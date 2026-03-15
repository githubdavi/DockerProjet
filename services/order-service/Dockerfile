FROM node:25-alpine

WORKDIR /order-service

COPY package.json .

COPY . .

RUN npm i

CMD ["npm", "run", "dev"]

EXPOSE 3001