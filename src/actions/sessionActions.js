import * as types from './actionTypes'; 

export function loginSuccess() {  
  return {type: types.LOG_IN_SUCCESS}
}

export function logInUser(credentials) {  
    return function(dispatch) {
        return dispatch(loginSuccess());
    };
}