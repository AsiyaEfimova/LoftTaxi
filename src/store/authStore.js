import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { loginReducer } from '../modules/Auth/authReducer';
import { cardReducer } from '../modules/Profile/profileReducer';
import {authMiddleware} from '../modules/Auth/authMiddleware';
import {profileMiddleware} from '../modules/Profile/profileMiddleware';

export const initialState = {
    loginReducer: {
        isLoading: false,
        isAuthorized: false,
        error: '',
        token: ''
    },
    cardReducer: {
        isLoading: false,
        hasCard: false,
        token: '',
        cardNumber: '',
        expiryDate: '',
        cardName: '',
        cvc: ''
    }
};

const reducers = combineReducers({
    loginReducer,
    cardReducer
});

const createAuthStore = () => {
    const store = createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(authMiddleware),
            applyMiddleware(profileMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : (noop) => noop
        )
    );

    return store;
};

export default createAuthStore;