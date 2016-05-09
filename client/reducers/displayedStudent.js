import * as types from '../constants/ActionTypes.js';

const initialState = {};

export default function currentStudent(state = initialState, action) {
  switch (action.type) {
    case types.DISPLAY_STUDENT:
      return action.displayedStudent;
    default:
      return state;
  }
}
