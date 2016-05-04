import Course from '../models/Course.js';

/*
* Returns all announcements for the course found
* based on the courseId. Returns an empty array if the course
* is not found.
*/
export function findAllByCourse(req, res) {
  const courseId = req.body.courseId;

  Course.findById(courseId)
  .then((course) => (
    course.getAnnouncements()
  ))
  .then((announcements) => (
    res.json(announcements)
  ));
}
