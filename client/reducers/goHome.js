import * as types from '../constants/ActionTypes.js';

const initialState = true;

export default function goHome(state = initialState, action) {
  switch (action.type) {
    case types.GO_HOME:
      return action.goHome;
    default:
      return state;
  }
}
