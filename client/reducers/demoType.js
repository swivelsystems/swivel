import * as types from '../constants/ActionTypes.js';

const initialState = 'teacher';

export default function displayStudent(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_DEMO_TYPE:
      return action.demoType;
    default:
      return state;
  }
}
