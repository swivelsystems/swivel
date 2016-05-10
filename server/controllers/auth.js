import * as teachers from './teachers.js';
import * as students from './students.js';
import passport from 'passport';

export function authenticate(email, password, next) {
  // const isTeacher = req.body.isTeacher;
  // if (false) {
  //   // handle teacher login
  //   teachers.findByEmail(email)
  //   .then((foundTeacher) => {
  //     if (foundTeacher.password !== password) { return next(false); }
  //     return next(foundTeacher);
  //   })
  //   .catch((err) => (new Error(err)));
  // } else {
  //   // handle student login
  //   students.findByEmail(email)
  //   .then((foundStudent) => {
  //     if (foundStudent.password !== password) { return next(false); }
  //     return next(foundStudent);
  //   })
  //   .catch((err) => (new Error(err)));
  // }
  next(null, {
    email,
  });
}

passport.serializeUser(function(user, done) {
  // please read the Passport documentation on how to implement this. We're now
  // just serializing the entire 'user' object. It would be more sane to serialize
  // just the unique user-id, so you can retrieve the user object from the database
  // in .deserializeUser().
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  // Again, read the documentation.
  done(null, user);
});
