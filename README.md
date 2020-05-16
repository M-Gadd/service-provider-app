# Service Provider App

## Features

- [x] Docker containers config
- [ ] React Redux Boilerplate
- [x] Golang Mux API boilerplate
- [x] Mongodb setup
- [ ] CD/CI Jenkins integration

## Benifits

- Anyone can contribute to your project locally without having to setup/install GOPATH, Mongodb, node etc
- Dev enviroment is the same as production enviroment
- Quickly get your GoMore project off the ground

## Getting started:

- Starting the app with docker-compose

```bash
$ clone the repo
$ cd into the repo
$ docker-compose up
```

- Starting the app without docker-compose

```bash
$ clone the repo
$ cd into the repo
$ cd client && yarn start && cd .. && cd server && npm run start
```

Then you can open the React frontend at localhost:3000 and the Node API at localhost:5000

Changing any frontend (React) code locally will cause a hot-reload in the browser with updates and changing any backend (Node) code locally will also automatilly update any changes.

Then to build production images run:

```bash
$ docker build ./api --build-arg app_env=production
$ docker build ./frontend --build-arg app_env=production
$ docker build ./db
```

Bootstarp & Reactstrap for a quick design structure
Moment to fomat Dates
Axios for api calls
react-card-flip for flipping cards
react-hooks-helper & react-hook-form for generating forms
react-rater to generate scale for skills
FontAwesome for icons
