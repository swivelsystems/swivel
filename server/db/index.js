import db from 'db';
import { Announcement, Assignment, Course, Student, Submission, Teacher } from '../models';

module.exports = function initBackend() {
  Announcement.belongsTo(Teacher);
  Announcement.belongsTo(Course);

  Assignment.belongsTo(Course);
  Assignment.hasMany(Submission);

  Course.belongsTo(Teacher);
  Course.hasMany(Assignment);
  Course.hasMany(Announcement);
  Course.hasMany(Student, { through: 'StudentCourseGrade' });
  // TODO: Figure out how to add a grade field to the StudentCourseGrade join table

  Student.hasMany(Course, { through: 'StudentCourseGrade' });
  Student.hasMany(Submission);

  Submission.belongsTo(Student);
  Submission.belongsTo(Assignment);

  Teacher.hasMany(Course);
  Teacher.hasMany(Announcement);

  // [modelName].sync(); //use {force: true} option to drop existing tables
  db.sync(); // Using this instead of syncing separately creates the join tables
};
