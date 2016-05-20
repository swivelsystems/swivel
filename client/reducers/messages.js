import * as types from '../constants/ActionTypes.js';
import _ from 'lodash';

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
      const copy = _.clone(state);
      copy[action.id] = copy[action.id] || [];
      copy[action.id].push(action.message);
      return copy;
    }
    case types.CLEAR_MESSAGES: {
      return initialState;
    }
    case types.RETRIEVE_MESSAGES:
      return state[action.id];
    default:
      return state;
  }
}
