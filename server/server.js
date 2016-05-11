import express from 'express';
import bodyParser from 'body-parser';
import studentsRouter from './routers/studentsRouter.js';
import teachersRouter from './routers/teachersRouter.js';
import passport from 'passport';
import morgan from 'morgan';
import session from 'express-session';

const authenticate = require('./controllers/auth.js').authenticate;
const LocalStrategy = require('passport-local').Strategy;

const app = express();
const port = process.env.PORT || 8080;

app.use('/api/students', studentsRouter);
app.use('/api/teachers', teachersRouter);

app.use(session({ secret: 'keyboard cat' }));
app.use(morgan('dev'));

app.use(express.static(`${__dirname}/../client/`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

passport.use(new LocalStrategy({
  usernameField: 'email',
}, authenticate));

app.listen(port, (err) => {
  if (err) { throw new Error(err); }
  console.log('Swivel server listening on port: ' + port);
});
