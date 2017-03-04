// action creators
//  a requirement of an action is has a type property,
// the rest can be anything you want

import * as types from './actionTypes';
import leaderApi from '../api/mockLeaderAPI';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusAction';


export function loadLeadersSuccess(leaders) {
  return { type: types.LOAD_LEADERS_SUCCESS, leaders};
}

export function updateLeaderSuccess(leader) {
    return { type: types.UPDATE_LEADER_SUCCESS, leader};
}

export function createLeaderSuccess(leader) {
    return { type: types.CREATE_LEADER_SUCCESS, leader};
}

// async (thunk) call to our API.
//   Handle the promise(return form API/server) and then dispatch the action when server/API is down.
//   dispatch, then fires of the action, and then the reducer is called to update state and then components
//   will recieve the action via mapStateToProps.

export function loadLeaders() {

    return function(dispatch) {
      dispatch(beginAjaxCall());

        //  getAllLeaders returns a promise
      return leaderApi.getAllLeaders()
          .then(leaders => {

              console.log("*****LEADERS - loadLeaders***************");
              console.log(leaders);
              console.log("*****LEADERS - loadLeaders***************");

              dispatch(loadLeadersSuccess(leaders));

          })
          .catch(error => {

            throw(error);

          });
    };
}

export function saveLeader(leader) {


    return function(dispatch, getState) {
        dispatch(beginAjaxCall());

        //  getAllLeaders returns a promise
        return leaderApi.saveLeader(leader)

            .then(savedLeader => {

                leader.id ? dispatch(updateLeaderSuccess(savedLeader))
                          :
                            dispatch(createLeaderSuccess(savedLeader));

            })
            .catch(error => {
                dispatch(ajaxCallError(error));
                throw(error);

            });
    };
}