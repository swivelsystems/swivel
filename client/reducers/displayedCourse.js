import * as types from '../constants/ActionTypes.js';

const initialState = {
  id: 2,
  name: 'CODING101',
  students: [
    { name: 'kiddo', id: 12 },
    { name: 'jimbo', id: 123 },
    { name: 'testo', id: 3 },
  ],
  assignments: [
      { name: 'Final', id: 12 },
      { name: 'n factorial zerios blah', id: 123 },
      { name: 'stop it', id: 3 },
  ],
};

export default function currentCourse(state = initialState, action) {
  switch (action.type) {
    case types.DISPLAY_COURSE:
      return action.displayedCourse;
    default:
      return state;
  }
}
