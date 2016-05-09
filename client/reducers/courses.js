import * as types from '../constants/ActionTypes.js';

const initialState = [
  {
    id: 1,
    name: 'TESTING',
    students: [
      { name: 'Zach', id: 12 },
      { name: 'Kim', id: 123 },
      { name: 'james', id: 3 },
    ],
    assignments: [
      { name: 'TESTING TIME', id: 12 },
      { name: 'FAILBLOG', id: 123 },
      { name: 'water blocks', id: 3 },
    ],
  },

  {
    id: 2,
    name: 'AJAX',
    students: [
      { name: 'Ho-el', id: 12 },
      { name: 'Kevin', id: 123 },
      { name: 'james', id: 3 },
    ],
    assignments: [
      { name: 'Final', id: 12 },
      { name: 'n factorial zerios blah', id: 123 },
      { name: 'stop it', id: 3 },
    ],
  },

  {
    id: 3,
    name: 'REQUESTS',
    students: [
      { name: 'jack', id: 12 },
      { name: 'Mylani', id: 123 },
      { name: 'Hao', id: 3 },
    ],
    assignments: [
      { name: 'Final', id: 12 },
      { name: 'Hemingway and other Ex-Pats', id: 123 },
      { name: 'The World of the Great Gastby', id: 3 },
    ],
  },
];

export default function courses(state = initialState, action) {
  switch (action.type) {
    case types.RECEIVE_COURSES_DATA:
      return action.courses;
    default:
      return state;
  }
}
