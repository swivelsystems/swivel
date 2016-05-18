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
    case types.ADD_MESSAGE: {
      const copy = Array.prototype.slice.call(state);
      if (!copy[action.id]) { copy[action.id] = []; }
      copy[action.id].push(action.message);
      return copy;
    }
    case types.RETRIEVE_MESSAGES:
      return state[action.id];
    default:
      return state;
  }
}
