FROM node:25.8-alpine

WORKDIR /frontend

COPY package.json .

COPY . .

RUN npm i

CMD ["npm", "run", "dev"]

EXPOSE 8080