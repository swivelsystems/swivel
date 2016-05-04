import * as types from '../constants/ActionTypes.js';

const initialState = '';

export default function tabView(state = initialState, action) {
  switch (action.type) {
    case types.SWITCH_TABS:
      return action.tabView;
    default:
      return state;
  }
}
