import {combineReducers} from 'redux';
import leaders from './leaderReducer';
import roles from './roleReducer';


const rootReducer = combineReducers({
   leaders,
   roles
});

export default rootReducer;
