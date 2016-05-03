import * as types from '../constants/ActionTypes.js';

module.exports = {
  goHome: (goHome) => (
    { type: types.GO_HOME, goHome }
  ),
  updateCourse: (currentCourse) => (
    { type: types.UPDATE_COURSE, currentCourse }
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
  viewStudent: (currentStudent) => (
    { type: types.VIEW_STUDENT, currentStudent }
  ),
  viewAssignment: (currentAssignment) => (
   { type: types.VIEW_ASSIGNMENT, currentAssignment }
  ),

};
