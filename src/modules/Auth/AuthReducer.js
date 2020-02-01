import {initialState} from '../../store/authStore';
import {getLoginRequest, getLoginSuccess, getLoginFailure, getLogOut} from './authActions';

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case getLoginRequest.toString():
            return state;
        case getLoginSuccess.toString():
            return { ...state, isAuthorized: state.isAuthorized, token: state.token };
        case getLoginFailure.toString():
            return { ...state, isAuthorized: state.isAuthorized, token: '' };
        case getLogOut.toString():
            return { ...state, isAuthorized: state.isAuthorized, token: '' };
        default:
            return state;
    }
};