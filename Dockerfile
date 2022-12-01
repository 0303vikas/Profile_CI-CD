# import docker image node:16  and assign a name to instance 
FROM node:16 as build 
# make an empty directory in the root of the image
RUN mkdir -p /app/ourtravelapp-server
# assign the work directory
WORKDIR /app/ourtravelapp-server

#copy backend folder to workdir
COPY ./backend /app/ourtravelapp-server

# install the dependenices to docker image
RUN npm install

# lighter version of docker image
From node:alpine as main

#copy folder from image build(node:16) to image main(node: alpine)
COPY --from=build /app/ourtravelapp-server /
# define port to listen to 
EXPOSE 8080
#starting project command
CMD ["npm", "start"]
