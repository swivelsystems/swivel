import db from './db.js';
import Announcement from '../models/Announcement.js';
import Assignment from '../models/Assignment.js';
import Course from '../models/Course.js';
import Student from '../models/Student.js';
import Submission from '../models/Submission.js';
import Teacher from '../models/Teacher.js';
import Chat from '../models/Chat.js';
// import StudentsCoursesGrade from '../models/StudentsCoursesGrade.js';

const initDatabase = () => {
  Announcement.belongsTo(Teacher);
  Announcement.belongsTo(Course);

  Assignment.belongsTo(Course);

  Course.belongsTo(Teacher);
  Course.belongsToMany(Student, { through: 'studentsCoursesGrades' });
  // TODO: Figure out how to add a grade field to the StudentCourseGrade join table

  Student.belongsToMany(Course, { through: 'studentsCoursesGrades' });

  Submission.belongsTo(Student);
  Submission.belongsTo(Assignment);

  // [modelName].sync(); //use {force: true} option to drop existing tables
  db.sync(); // Using this instead of syncing separately creates the join tables
};

initDatabase();
