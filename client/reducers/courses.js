import * as types from '../constants/ActionTypes.js';

const initialState = [];

export default function courses(state = initialState, action) {
  switch (action.type) {
    case types.RECEIVE_COURSES_DATA:
      return action.courses;
    default:
      return state;
  }
}
