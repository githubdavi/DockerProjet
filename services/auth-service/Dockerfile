FROM node:25.8-alpine

WORKDIR /auth-service

COPY package.json .

COPY . .

RUN npm i

CMD ["npm", "run", "dev"]

EXPOSE 3001