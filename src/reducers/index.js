import {combineReducers} from 'redux';
import leaders from './leaderReducer';
import roles from './roleReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

// this root reducer defines all the reducers we have in the app
//
// naming the variable above is important, ' roles and leaders ', becauase
// then in ur components u can use 'state.roles' or 'state.leaders'

const rootReducer = combineReducers({
   leaders,
   roles,
   ajaxCallsInProgress
});

export default rootReducer;
