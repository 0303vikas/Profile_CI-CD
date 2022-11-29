FROM node:16
RUN mkdir -p /app/ourtravelapp-server
WORKDIR /app/ourtravelapp-server

COPY package.json /app/ourtravelapp-server
COPY package-lock.json /app/ourtravelapp-server

RUN npm install

COPY . /app/ourtravelapp

CMD ["npm", "start"]
