// reducers -
//    a function that will handle our actions(  'createLeader')
//    accepts a state and an action, and returns a new state

import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function roleReducer(state = initialState.roles, action) {

    switch(action.type) {

        case types.LOAD_ROLES_SUCCESS:
            return action.roles;

        default:
            return state;
    }
}
