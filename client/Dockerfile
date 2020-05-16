# FROM node:alpine as builder
FROM node:alpine 

WORKDIR '/app'

COPY ./package.json ./

RUN yarn install 

COPY . .

EXPOSE 3000

CMD [ "yarn", "start"]
# RUN npm run build


