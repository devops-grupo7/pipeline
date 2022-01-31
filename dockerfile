from node:14-alpine

WORKDIR /app

COPY packaage.json .

RUN npm install

COPY . .

EXPOSE 80

CMD ["node", "app.js"]