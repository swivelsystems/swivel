import * as types from '../constants/ActionTypes.js';

const initialState = {};

export default function user(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_USER:
      return action.user;
    default:
      return state;
  }
}
