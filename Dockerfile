FROM node:16 as build
RUN mkdir -p /app/ourtravelapp-server
WORKDIR /app/ourtravelapp-server

COPY ./backend /app/ourtravelapp-server


RUN npm install

From node:alpine as main

COPY --from=build /app/ourtravelapp-server /
EXPOSE 8080
CMD ["npm", "start"]
