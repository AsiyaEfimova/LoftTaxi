import {initialState} from '../../store/authStore';
import {
    postLoginRequest,
    postLoginSuccess,
    postLoginFailure,
    postRegisterRequest,
    postRegisterSuccess,
    postRegisterFailure,
    postLogOut
} from './authActions';

export const loginReducer = (state = initialState.loginReducer, action) => {
    console.log(action.payload);
    switch (action.type) {
        case postLoginRequest.toString():
        case postRegisterRequest.toString():
            return { ...state, isLoading: true, error: '' };
        case postLoginSuccess.toString():
        case postRegisterSuccess.toString():
            console.log(action.payload);
            return { ...state, isLoading: false, isAuthorized: action.payload.success, token: action.payload.token, error: '' };
        case postLoginFailure.toString():
        case postRegisterFailure.toString():
            return { ...state, isLoading: false, isAuthorized: action.payload.success, token: '', error: action.payload.error };
        case postLogOut.toString():
            return { ...state, isLoading: false, isAuthorized: action.payload.success, token: '', error: '' };
        default:
            return state;
    }
};