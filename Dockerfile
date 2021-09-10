
FROM node:lts-alpine3.12

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .
