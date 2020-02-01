import { createStore, compose, applyMiddleware } from 'redux';
import { loginReducer } from '../modules/Auth/authReducer';
import {authMiddleware} from '../modules/Auth/authMiddleware';

export const initialState = {
    isAuthorized: false,
    isLoading: false,
    token: '',
    error: ''
};

const createAuthStore = () => {
    const store = createStore(
        loginReducer,
        compose(
            applyMiddleware(authMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : (noop) => noop
        )
    );

    return store;
};

export default createAuthStore;