// reducers -
//    a function that will handle our actions( courseAction 'createLeader')
//    accepts a state and an action, and returns a new state

import * as types from '../actions/actionTypes';

export default function leaderReducer(state = [], action) {

  switch(action.type) {

    case types.LOAD_LEADERS_SUCCESS:
      //es6 spread operator ...state exploding all values out
      ///  .assign - deep copy and add a new item to array
      return action.leaders;

    default:
      return state;
  }
}
