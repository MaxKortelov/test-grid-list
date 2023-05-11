FROM node:latest

WORKDIR /app

COPY package*.json /app/

RUN npm install --legacy-peer-deps

RUN npm install -g @nestjs/cli @nestjs/core

RUN npm install webpack webpack-cli @types/node --save-dev

COPY . .

RUN npm run build

RUN ls -a

ENV PORT 3001

EXPOSE $PORT

CMD ["npm", "run", "start:prod"]