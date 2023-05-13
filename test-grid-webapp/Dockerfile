FROM node:18.13.0

WORKDIR /app

COPY package*.json /app/

RUN npm install --legacy-peer-deps

COPY . /app/

ENV PORT 3000

EXPOSE $PORT

CMD ["npm", "run", "start"]