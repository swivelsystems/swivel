import * as types from '../constants/ActionTypes.js';

const initialState = {};

export default function displayStudent(state = initialState, action) {
  switch (action.type) {
    case types.DISPLAY_ASSIGNMENT:
      return action.displayedAssignment;
    default:
      return state;
  }
}
