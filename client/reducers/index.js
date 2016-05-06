import { combineReducers } from 'redux';
import courses from './courses.js';
import currentCourse from './currentCourse.js';
import currentStudent from './currentStudent.js';
import goHome from './goHome.js';
import tabView from './tabView.js';
import currentAssignment from './currentAssignment.js';

const rootReducer = combineReducers({
  courses,
  currentCourse,
  currentStudent,
  goHome,
  tabView,
  currentAssignment,
});

export default rootReducer;
