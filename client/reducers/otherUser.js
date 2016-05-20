import * as types from '../constants/ActionTypes.js';

const initialState = {};

export default function otherUser(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_OTHER_USER:
      return action.user;
    default:
      return state;
  }
}
