import * as Teachers from '../controllers/teachers.js';
import * as Courses from '../controllers/courses.js';
import * as Announcements from '../controllers/announcements.js';
import * as Assignments from '../controllers/assignments.js';
import * as Submissions from '../controllers/submissions.js';
import * as Students from '../controllers/students.js';

export const retrieveCourses = (req, res) => {
  const instructorId = req.params.id;

  const package = {};

  Teachers.findById(teacherId)
    .then((id) => {

    })

}
