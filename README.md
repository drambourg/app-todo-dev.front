# TODO Application

This application is to manage status on Todos, and consult all of ones. Specific filters can help to find your reaching todo.

## Stack
This application is developped on ReactJS 16, and uses these main libraries :
- ApolloClient to connect on GraphQL Api provided,
- HookRouter and react-dom, to manage app routing.

## Installation
1. Install libraries and its dependencies
```
npm install
```
2. Copy file ./.env.dist on root directory to
 - development environment : `.env.development`
 - production environment : `.env.production`

3. Set environment variables


## Start application in development
To start application server in DEVELOPMENT mode
```
npm start
```

Testing : Go to (http://localhost:3000) and enjoy

## Build and launch application
### Build scripting
To build application based on DEVELOPMENT mode
```
npm run build:dev
```
To build application based on PRODUCTION mode
```
npm run build:prod
```
### Launch server
```
serve -s build
```

Testing : Go to (http://localhost:3000) and enjoy