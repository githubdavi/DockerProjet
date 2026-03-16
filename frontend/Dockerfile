FROM node:25.8-alpine as base

WORKDIR /frontend

COPY package.json .

COPY . .

RUN npm i

FROM base as dev

RUN rm -r /frontend/tests && rm vitest.config.js .env.production

CMD ["npm", "run", "dev"]

EXPOSE 8080

FROM base as build

RUN npm run build

FROM nginx:latest as prod

COPY --from=build /frontend/dist /usr/share/nginx/html

EXPOSE 8000