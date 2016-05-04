import db from './db.js';
import Announcement from '../models/Announcement.js';
import Assignment from '../models/Assignment.js';
import Course from '../models/Course.js';
import Student from '../models/Student.js';
import Submission from '../models/Submission.js';
import Teacher from '../models/Teacher.js';

const initBackend = () => {
  Announcement.belongsTo(Teacher);
  Announcement.belongsTo(Course);

  Assignment.belongsTo(Course);
  Assignment.hasMany(Submission);

  Course.belongsTo(Teacher);
  Course.hasMany(Assignment);
  Course.hasMany(Announcement);
  Course.belongsToMany(Student, { through: 'StudentCourseGrade' });
  // TODO: Figure out how to add a grade field to the StudentCourseGrade join table

  Student.belongsToMany(Course, { through: 'StudentCourseGrade' });
  Student.hasMany(Submission);

  Submission.belongsTo(Student);
  Submission.belongsTo(Assignment);

  Teacher.hasMany(Course);
  Teacher.hasMany(Announcement);

  // [modelName].sync(); //use {force: true} option to drop existing tables
  db.sync(); // Using this instead of syncing separately creates the join tables
};

initBackend();
