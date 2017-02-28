import {combineReducers} from 'redux';
import leaders from './leaderReducer';

const rootReducer = combineReducers({
   leaders
});

export default rootReducer;
