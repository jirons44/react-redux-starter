// action creators
//  a requirement of an action is has a type property,
// the rest can be anything you want

import * as types from './actionTypes';
import leaderApi from '../api/mockLeaderAPI';


export function loadLeadersSuccess(leaders) {
  return { type: types.LOAD_LEADERS_SUCCESS, leaders};
}

export function updateLeaderSuccess(leader) {
    return { type: types.UPDATE_LEADER_SUCCESS, leader};
}

export function createLeaderSuccess(leader) {
    return { type: types.CREATE_LEADER_SUCCESS, leader};
}


export function loadLeaders() {
    return function(dispatch) {
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
        //  getAllLeaders returns a promise
        return leaderApi.saveLeader(leader)
            .then(savedLeader => {
                leader.id ? dispatch(updateLeaderSuccess(savedLeader))
                          :
                            dispatch(createLeaderSuccess(savedLeader));

            })
            .catch(error => {

                throw(error);

            });
    };
}