import * as types from '../constants/ActionTypes.js';

module.exports = {
  goHome: (goHome) => (
    { type: types.GO_HOME, goHome }
  ),
  displayCourse: (displayedCourse) => (
    { type: types.DISPLAY_COURSE, displayedCourse }
  ),
  receiveCourses: (courses) => (
    { type: types.RECEIVE_COURSES_DATA, courses }
  ),
  receiveCoursesError: (error) => (
    { type: types.RECEIVE_COURSES_ERROR, error }
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
  toggleDemoType: (demoType) => (
    { type: types.TOGGLE_DEMO_TYPE, demoType }
  ),

};
