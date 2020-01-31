import { createStore } from 'redux';
import { loginReducer } from '../modules/Auth/authReducer'

const initialState = {
    isAuthorized: false
};

const createAuthStore = () => {
    const store = createStore(
        loginReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (noop) => noop
    );

    return store;
};

export default createAuthStore;