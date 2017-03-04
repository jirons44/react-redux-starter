// action creators
import * as types from './actionTypes';
import roleApi from '../api/mockRolesAPI';
import { beginAjaxCall } from './ajaxStatusAction';



export function loadRolesSuccess(roles) {
    return { type: types.LOAD_ROLES_SUCCESS, roles};
}


export function loadRoles() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return roleApi.getAllRoles()
            .then(roles => {
                console.log("*****ROLES - loadRoles***************");
                console.log(roles);
                console.log("*****ROLES - loadRoles***************");

                dispatch(loadRolesSuccess(roles));
            })
            .catch(error => {

                throw(error);

            });
    };
}

//TODO: https://github.com/matthamil/react-redux-pluralsight-coryhouse