import * as types from '../constants/ActionTypes.js';

const initialState = {
  id: 2,
  name: 'CODING101',
  students: [
    { name: 'kiddo', id: 12 },
    { name: 'jimbo', id: 123 },
    { name: 'testo', id: 3 },
  ],
  assignments: ['code', 'all day err day', 'The World Rulers of computer science', 'allen turing'],
};

export default function currentCourse(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_COURSE:
      return action.currentCourse;
    default:
      return state;
  }
}
