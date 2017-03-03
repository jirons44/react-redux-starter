// reducers -
//    a function that will handle our actions(  'createLeader')
//    accepts a state and an action, and returns a new state

import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function leaderReducer(state = initialState.leaders, action) {

  switch(action.type) {

    case types.LOAD_LEADERS_SUCCESS:
      return action.leaders;

    case types.CREATE_LEADER_SUCCESS:
        console.log(" reducer   case types.CREATE_LEADERS_SUCCESS:");
      return [
          ...state,
          Object.assign({}, action.leader)
      ];

    case types.UPDATE_LEADER_SUCCESS:
        console.log(" reducer   case types.CREATE_LEADERS_SUCCESS:");

      return [
          ...state.filter(leader => leader.id !== action.leader.id),
          Object.assign({}, action.leader)
      ];

    default:
      return state;
  }
}
