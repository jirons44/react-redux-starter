import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSucess(type) {
    return type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.numAjaxCallsInProgress, action) {

    if (action.type == types.BEGIN_AJAX_CALL) {
        return state + 1;

    // crazy -- this only works if all actions that are sucessfull ends int '_SUCCESS '.
    } else if (action.type == types.AJAX_CALL_ERROR ||
        actionTypeEndsInSucess(action.type) ) {
        return state - 1;
    }

    return state;
}


