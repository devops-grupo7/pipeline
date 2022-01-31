from node:14-alpine

WORKDIR /app
hola

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

CMD ["node", "app.js"]
