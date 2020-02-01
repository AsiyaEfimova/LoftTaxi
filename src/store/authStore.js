import { createStore, compose, applyMiddleware } from 'redux';
import { loginReducer } from '../modules/Auth/AuthReducer';
import {authMiddleware} from '../modules/Auth/AuthMiddleware';

export const initialState = {
    isAuthorized: false,
    token: ''
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