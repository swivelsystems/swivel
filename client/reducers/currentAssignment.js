import * as types from '../constants/ActionTypes.js';

const initialState = {};

export default function currentStudent(state = initialState, action) {
  switch (action.type) {
    case types.VIEW_ASSIGNMENT:
      return action.currentAssignment;
    default:
      return state;
  }
}
