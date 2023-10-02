FROM node:lts-alpine

WORKDIR /express-api

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
EXPOSE 8081
EXPOSE 8082

CMD [ "npm", "run", "dev" ]