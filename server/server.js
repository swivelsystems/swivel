import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import compression from 'compression';
import studentsRouter from './routers/studentsRouter.js';
import teachersRouter from './routers/teachersRouter.js';
import * as sockets from './socket.js';

// import passport from 'passport';
// const authenticate = require('./controllers/auth.js').authenticate;
// const LocalStrategy = require('passport-local').Strategy;

// Express & Server declarations
const app = express();
app.use(compression());

const port = process.env.PORT || 8080;

// Sockets
const server = app.listen(port, (err) => {
  if (err) { throw new Error(err); }
  console.log('Swivel server listening on port: ', port);
});

sockets.socketServer(app, server);

app.use(compression());
app.use(cors());

// Routing
app.use('/api/students', studentsRouter);
app.use('/api/teachers', teachersRouter);

// app.use(session({ secret: 'keyboard cat' }));
app.use(morgan('dev'));

app.use(express.static(`${__dirname}/../client/`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// passport.use(new LocalStrategy({
//   usernameField: 'email',
// }, authenticate));
