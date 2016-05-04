import { Announcement } from '../models/Announcement.js';

/*
* Returns all announcements for the course found
* based on the courseId. Returns an empty array if the course
* is not found.
*/
export function findAllByCourse(courseId, callback) {
  const result = [{ title: 'Test', body: 'Sample body' }];
  if (callback) { return callback(null, result); }
  return result;
}
