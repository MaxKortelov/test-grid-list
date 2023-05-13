FROM node:latest

WORKDIR /app

COPY package*.json /app/

RUN npm install --legacy-peer-deps

COPY . /app/

ENV PORT 3000

EXPOSE $PORT

CMD ["npm", "run", "start"]