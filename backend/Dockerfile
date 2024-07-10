FROM node:20.15-alpine 

WORKDIR /app-backend

COPY . .

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]