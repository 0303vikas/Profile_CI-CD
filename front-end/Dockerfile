FROM node:16
RUN mkdir -p /app/ourtravelapp
WORKDIR /app/ourtravelapp
COPY package.json /app/ourtravelapp
COPY package-lock.json /app/ourtravelapp

RUN npm install

COPY . /app/ourtravelapp

RUN npm run build
EXPOSE 3000

COPY . /usr/src/app

CMD ["npm", "start"]
