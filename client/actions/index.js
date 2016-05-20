import * as types from '../constants/ActionTypes.js';

module.exports = {
  addMessage: (message, id) => (
    { type: types.ADD_MESSAGE, message, id }
  ),
  clearMessages: () => (
    { type: types.CLEAR_MESSAGES }
  ),
  clearCourse: () => (
    { type: types.CLEAR_COURSE }
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
  retrieveMessages: (id) => (
    { type: types.RETRIEVE_MESSAGES, id }
  ),
  switchTabs: (tabView) => (
    { type: types.SWITCH_TABS, tabView }
  ),
  toggleDemoType: (demoType) => (
    { type: types.TOGGLE_DEMO_TYPE, demoType }
  ),
  updateUser: (user) => (
    { type: types.UPDATE_USER, user }
  ),
  updateOtherUser: (user) => (
    { type: types.UPDATE_OTHER_USER, user }
  ),
};
