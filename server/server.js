import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';
import studentsRouter from './routers/studentsRouter.js';
import teachersRouter from './routers/teachersRouter.js';
import * as sockets from './socket.js';

// import passport from 'passport';
// const authenticate = require('./controllers/auth.js').authenticate;
// const LocalStrategy = require('passport-local').Strategy;


//Express & Server declarations
const app = express();
const port = process.env.PORT || 8080;
const server = app.listen(port, (err) => {
  if (err) { throw new Error(err); }
  console.log('Swivel server listening on port: ' + port);
});

//Sockets
sockets.socketServer(app, server);

//Server Configuration
app.use(compression());
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//Routing
app.use('/api/students', studentsRouter);
app.use('/api/teachers', teachersRouter);

app.use(session({ secret: 'keyboard cat' }));
app.use(morgan('dev'));

app.use(express.static(`${__dirname}/../client/`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// passport.use(new LocalStrategy({
//   usernameField: 'email',
// }, authenticate));

