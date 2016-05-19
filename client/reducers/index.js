import { combineReducers } from 'redux';
import courses from './courses.js';
import displayedCourse from './displayedCourse.js';
import displayedStudent from './displayedStudent.js';
import goHome from './goHome.js';
import tabView from './tabView.js';
import displayedAssignment from './displayedAssignment.js';
import demoType from './demoType.js';
import messages from './messages.js';
import user from './user.js';

const rootReducer = combineReducers({
  courses,
  demoType,
  displayedAssignment,
  displayedCourse,
  displayedStudent,
  goHome,
  messages,
  tabView,
  user,
});

export default rootReducer;
