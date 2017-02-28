// action creators
import * as types from './actionTypes';
import leaderApi from '../api/mockLeaderAPI';


export function loadLeadersSuccess(leaders) {
  return { type: types.LOAD_LEADERS_SUCCESS, leaders};
}


export function loadLeaders() {
    return function(dispatch) {
      //  getAllLeaders returns a promise
      return leaderApi.getAllLeaders()
          .then(leaders => {
            console.log('*********************');
            console.log(leaders);
            console.log('*********************');

            dispatch(loadLeadersSuccess(leaders));

          })
          .catch(error => {

            throw(error);

          });
    };
}