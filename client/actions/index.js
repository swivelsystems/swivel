import * as types from '../constants/ActionTypes.js';

module.exports = {
  addNewMessage: (message) => (
    { type: types.ADD_NEW_MESSAGE, message }
  ),
  loadMessages: (messages) => (
    { type: types.LOAD_MESSAGES, messages }
  ),
  displayAssignment: (displayedAssignment) => (
    { type: types.DISPLAY_ASSIGNMENT, displayedAssignment }
  ),
  displayCourse: (displayedCourse) => (
    { type: types.DISPLAY_COURSE, displayedCourse }
  ),
  displayStudent: (displayedStudent) => (
    { type: types.DISPLAY_STUDENT, displayedStudent }
  ),
  goHome: (goHome) => (
    { type: types.GO_HOME, goHome }
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
  toggleDemoType: (demoType) => (
    { type: types.TOGGLE_DEMO_TYPE, demoType }
  ),

};
