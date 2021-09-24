# TODO Application

This application is to manage status on Todos, and consult all of ones. Specific filters can help to find your reaching todo.

# Table of Contents
1. [Stack](#stack)
2. [Installation](#installation)
3. [Start development applcation](#start-application-in-development)
4. [Build and Launch](#build-and-launch-application)
6. [Help developers](#help-developers)
5. [Contact](#contact)

# Stack
This application is developped on ReactJS 17, and uses these main libraries :
- ApolloClient to connect on GraphQL Api provided,
- React-Dom, to manage app routing
- Emotion to style app, by css in js,
# Instructions
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

Testing : Go to your serve (by default http://localhost:5000) and enjoy

# Help Developers
### Structure summary
```
src/
    ./components/           # components reusable w/ logic
    ./config/               # configurations files
    ./contexts/             # context hooks definition
    ./helpers/              # custom functions reusable
    ./models/               # definition data and repositories access
        ./gql/                  # GraphQL logic
            ./mutations/            # Mutation operations definition
            ./queries/              # Query operations definition
    ./reducers/             # reducer hooks definition
    ./routes/               # Routing définitions
    ./views/                # Web page or fragmented views
    
```

# Contact
Damien Rambourg - NouseDev'/ 2021

damien@nousedev.fr
