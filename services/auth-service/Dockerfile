FROM node:25.8-alpine as base

WORKDIR /auth-service

COPY package.json .

COPY . .

FROM base as dev

RUN npm i

CMD ["npm", "run", "dev"]

EXPOSE 3001

FROM base as prod

RUN npm i --omit=dev

CMD ["npm", "run", "start"]

EXPOSE 3001