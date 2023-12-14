# Musicify microservices

This application contains multiple services that are used to serve for Musicify App. The following microservices exists:

- Albums
- Bands
- Favourites
- Genres
- Tracks
- Users
- Artists

## Installation

1. In each microservice copy and rename env.example to .env
2. If needed apply changes in .env file. Each .env file have _PORT_ variable (by default it's 3000 in each service)
   and _VERIFY_TOKEN_URL_ (url for jwt verification in Users service)
3. You can install node modules by:
    ```bash
   # separately in each service folder
   npm i
   
   # separately for each service form the rood directory
   npm run install:%serviceName%
   
   # for all services (install dependencies for root folder and it will install nested dependencies in postinstall script)
   npm i
   ```
4. To run services:
   ```bash
   # separately in each service folder
   npm run:start:dev

   # separately for each service form the rood directory
   npm run run:%serviceName%

   # all services watch+debug
   npm run run:all:dev
   
   # all services watch
   npm run run:all
   
   # all services prod mode
   npm run run:all:prod
   ```

## Mongo

The application is using MongoDB as a database. Feel free to choose any solution for it, however it's highle recommended to use Docker and the official image for it.

[Docker MongoDB](https://hub.docker.com/_/mongo)

# Working with Docker MongoDB

1. Create a docker container with MongoDB, for this run "docker run --name <container_name> -d -p 64000:64000 mongo" and Attach Shell to one;
2. In bash of the container run commands:
   ```bash
      # mongosh
      # use admin
      # db.runCommand({"createUser" : "mongoadmin","pwd":"secret","roles" : [{"role" : "userAdminAnyDatabase","db": "admin"}]})
   ```
3. In all .env files of microservices, replace the current MONGO_URL with "mongodb://mongoadmin:secret@<your_ip_container>:27017/?authSource=admin."
4. You can use the "docker inspect <container_id>" command to get <your_ip_container> of the container
5. You can use the "docker ps" command to get <container_id>
6. Run the applications with the command "run:all"

