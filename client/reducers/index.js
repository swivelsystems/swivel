import { combineReducers } from 'redux';
import courses from './courses.js';
import displayedCourse from './displayedCourse.js';
import displayedStudent from './displayedStudent.js';
import goHome from './goHome.js';
import tabView from './tabView.js';
import displayedAssignment from './displayedAssignment.js';
import demoType from './demoType.js';
import chat from './messages.js';

const rootReducer = combineReducers({
  chat,
  courses,
  demoType,
  displayedAssignment,
  displayedCourse,
  displayedStudent,
  goHome,
  tabView,
});

export default rootReducer;
