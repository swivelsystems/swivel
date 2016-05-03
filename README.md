[![Stories in Ready](https://badge.waffle.io/SwivelSystems/Swivel.png?label=ready&title=Ready)](https://waffle.io/HolisticParallelogram/SwivelSystems/Swivel)
# SwivelSystems Education Management Software
Open-source education management technology for K-12 schools.

## Engineering Team

  - __Product Owner__: Joel Aguero
  - __Scrum Master__: Kevin Meraz
  - __Development Team Members__: Jonathan Chen, Elizabeth Harris, Joel Aguero, Kevin Meraz

## Table of Contents

1. [Requirements](#requirements)
1. [Tech Stack](#tech-stack)
1. [Development](#development)
1. [Team](#legacy-team)
1. [Contributing](#contributing)


## Requirements

Node v5.8  
Webpack

## Tech Stack
- [React](https://facebook.github.io/react/)
- [Node](https://nodejs.org/en/) and [Express](http://expressjs.com/)
- [Sequelize ORM](http://docs.sequelizejs.com/en/latest/) and [MySQL](https://www.mysql.com/)

## Development

### Setting up MySQL database:
(If you don't have Homebrew installed, go to http://brew.sh/ to install Homebrew.)
```sh
brew install mysql
mysql -u root
CREATE DATABASE crunchy
```

### Starting the MySQL server:

```sh
mysql.server start
```

### Stopping the MySQL server:

```sh
mysql.server stop
```

### Installing Dependencies

From within the root directory:

```sh
npm install
npm install -g webpack
npm install -g karma-cli
npm install -g jasmine
```

### Serve your files on a webpack server:

'npm run dev-start'

This script uses web pack to bundle your js and jsx files (with source maps), watches the files for changes to trigger a new bundle, and starts your node server on localhost:8080.

Navigate your browser to localhost: 8080 to view the app.

### API Endpoints
There are two API endpoints that serve data for students and teachers.

| API Endpoint        | Description           |
| :------------- |:-------- |
| /api/classes/student/:studentId      | Returns a JSON object with a single student's identifying information and their courses, including meta data, assignments, and submissions. |
| /api/classes/teacher/:teacherId      | Returns a JSON object with a single teacher's identifying information and their courses, including meta data, assignments, submissions, and students.      |  

### Schema Design
![Sorry, the schema image cannot be displayed. View it at http://i.imgur.com/U91qHnb.png](http://i.imgur.com/Mh09Ifo.png)
<!--
### Current Build Health [![Build Status](https://travis-ci.org/HolisticParallelogram/crunchy-tunes.svg?branch=master)](https://travis-ci.org/HolisticParallelogram/crunchy-tunes)
View the build [history](https://travis-ci.org/HolisticParallelogram/crunchy-tunes/builds) -->
<!--
### Roadmap

View the project roadmap [here](https://waffle.io/HolisticParallelogram/crunchy-tunes)
[![Stories in 'Backlog'](https://badge.waffle.io/HolisticParallelogram/crunchy-tunes.svg?label=Backlog&title=Backlog)](http://waffle.io/HolisticParallelogram/crunchy-tunes)
[![Stories in 'Ready'](https://badge.waffle.io/HolisticParallelogram/crunchy-tunes.svg?label=Ready&title=Ready)](http://waffle.io/HolisticParallelogram/crunchy-tunes)
[![Stories in 'In Progress'](https://badge.waffle.io/HolisticParallelogram/crunchy-tunes.svg?label=In%20Progress&title=In%20Progress)](http://waffle.io/HolisticParallelogram/crunchy-tunes)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines. -->
