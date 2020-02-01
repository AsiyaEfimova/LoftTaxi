import {createAction} from 'redux-actions';

export const getLoginRequest = createAction('GET_LOGIN_REQUEST');
export const getLoginSuccess = createAction('GET_LOGIN_SUCCESS');
export const getLoginFailure = createAction('GET_LOGIN_FAILURE');

export const getRegisterRequest = createAction('GET_REGISTER_REQUEST');
export const getRegisterSuccess = createAction('GET_REGISTER_SUCCESS');
export const getRegisterFailure = createAction('GET_REGISTER_FAILURE');

export const getLogOut = createAction('GET_LOGOUT');