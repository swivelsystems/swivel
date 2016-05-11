import * as types from '../constants/ActionTypes.js';

const initialState = {};

export default function currentCourse(state = initialState, action) {
  switch (action.type) {
    case types.DISPLAY_COURSE:
      return action.displayedCourse;
    default:
      return state;
  }
}
