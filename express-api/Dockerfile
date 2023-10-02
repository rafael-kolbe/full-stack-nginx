FROM node:lts-alpine

WORKDIR /express-api

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "dev" ]