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

/*
 * The following code integrates passport.js and implements a local storage
 * for user authentication. It's not necessary for the demo and should be removed
 * from the final code that we push to github, to avoid confusing anyone.
 */

// app.use(passport.initialize());
// app.use(passport.session()); // must come after express session
//
// app.get('/login', function(req, res) {
//   res.redirect('/login.html');
// });
//
// app.post('/login', passport.authenticate('local', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
// });

app.listen(port, (err) => {
  if (err) { throw new Error(err); }
  console.log('Swivel server listening on port: ' + port);
});
