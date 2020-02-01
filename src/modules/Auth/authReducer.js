import {initialState} from '../../store/authStore';
import {
    getLoginRequest,
    getLoginSuccess,
    getLoginFailure,
    getRegisterRequest,
    getRegisterSuccess,
    getRegisterFailure,
    getLogOut
} from './authActions';

export const loginReducer = (state = initialState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case getLoginRequest.toString():
        case getRegisterRequest.toString():
            return { ...state, isLoading: true, error: '' };
        case getLoginSuccess.toString():
        case getRegisterSuccess.toString():
            return { ...state, isLoading: false, isAuthorized: action.payload.success, token: action.payload.token, error: '' };
        case getLoginFailure.toString():
        case getRegisterFailure.toString():
            return { ...state, isLoading: false, isAuthorized: action.payload.success, token: '', error: action.payload.error };
        case getLogOut.toString():
            return { ...state, isLoading: false, isAuthorized: action.payload.success, token: '', error: '' };
        default:
            return state;
    }
};