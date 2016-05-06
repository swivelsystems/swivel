import * as types from '../constants/ActionTypes.js';

module.exports = {
  goHome: (goHome) => (
    { type: types.GO_HOME, goHome }
  ),
  displayCourse: (displayedCourse) => (
    { type: types.DISPLAY_COURSE, displayedCourse }
  ),
  getCourses: (courses) => (
    { type: types.GET_COURSES_DATA, courses }
  ),
  getCoursesError: (error) => (
    { type: types.GET_COURSES_ERROR, error }
  ),
  switchTabs: (tabView) => (
    { type: types.SWITCH_TABS, tabView }
  ),
  displayStudent: (displayedStudent) => (
    { type: types.DISPLAY_STUDENT, displayedStudent }
  ),
  displayAssignment: (displayedAssignment) => (
   { type: types.DISPLAY_ASSIGNMENT, displayedAssignment }
  ),

};
