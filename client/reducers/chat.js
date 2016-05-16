import * as types from '../constants/ActionTypes.js';

const initialState = {};

/*
 * structure is...
 * { student/teacherId: [{ message object, message object, message object}],
 *   student/teacherId: [{ message object, message object, message object}],
 *   ...
 * }
 */

export default function chat(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_MESSAGES:
      return state[action.id].concat(action.messages);
    case types.ADD_NEW_MESSAGE:
      return state[action.id].push(action.message);
    default:
      return state;
  }
}
