import * as types from '../constants/ActionTypes.js';

const initialState = {};

export default function currentCourse(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_COURSE:
      return action.currentCourse;
    default:
      return state;
  }
}
