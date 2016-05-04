import * as types from '../constants/ActionTypes.js';

const initialState = [
  {
    id: 1,
    name: 'HistoryFall2015',
    students: [
      { name: 'Zach', id: 12 },
      { name: 'Kim', id: 123 },
      { name: 'james', id: 3 },
    ],
    assignments: ['Midterm', 'The Past 100 Years in the Middle East', 'The World Rulers'] },
  {
    id: 2,
    name: 'EnglishFall2015',
    students: [
      { name: 'Ho-el', id: 12 },
      { name: 'Kevin', id: 123 },
      { name: 'james', id: 3 },
    ],
    assignments: ['Final', 'Hemingway and other Ex-Pats', 'The World of the Great Gastby'] },
  {
    id: 3,
    name: 'TrigonometryFall2015',
    students: [
      { name: 'jack', id: 12 },
      { name: 'Mylani', id: 123 },
      { name: 'Hao', id: 3 },
    ],
    assignments: ['Quiz1', 'Homework1', 'Homework2'] },
];

export default function courses(state = initialState, action) {
  switch (action.type) {
    case types.GET_COURSES:
      return action.courses;
    default:
      return state;
  }
}
