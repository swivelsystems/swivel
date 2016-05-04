import * as types from '../constants/ActionTypes.js';

const initialState = {
  id: 1,
  name: 'HistoryFall2015',
  students: [
    { name: 'Zach', id: 12 },
    { name: 'Kim', id: 123 },
    { name: 'james', id: 3 },
  ],
  assignments: ['Midterm', 'The Past 100 Years in the Middle East', 'The World Rulers'],
};

export default function currentCourse(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_COURSE:
      return action.currentCourse;
    default:
      return state;
  }
}
