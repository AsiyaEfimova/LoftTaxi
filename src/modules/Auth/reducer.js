import {initialState} from '../../store/store';
import {
    postLoginRequest,
    postLoginSuccess,
    postLoginFailure,
    postRegisterRequest,
    postRegisterSuccess,
    postRegisterFailure,
    postLogOut,
    clearError
} from './actions';

export const loginReducer = (state = initialState.loginReducer, action) => {
    switch (action.type) {
        case postLoginRequest.toString():
        case postRegisterRequest.toString():
            return { ...state, isLoading: true, error: '' };
        case postLoginSuccess.toString():
        case postRegisterSuccess.toString():
            return { ...state, isLoading: false, isAuthorized: action.payload.success, token: action.payload.token, error: '' };
        case postLoginFailure.toString():
        case postRegisterFailure.toString():
            return { ...state, isLoading: false, isAuthorized: action.payload.success, token: '', error: action.payload.error };
        case postLogOut.toString():
            return { ...state, isLoading: false, isAuthorized: false, login: '', password: '', token: '', error: '' };
        case clearError.toString():
            return { ...state, error: '' };
        default:
            return state;
    }
};