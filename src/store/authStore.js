import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { loginReducer } from '../modules/Auth/authReducer';
import { postCardReducer, getCardReducer } from '../modules/Profile/profileReducer';
import {authMiddleware} from '../modules/Auth/authMiddleware';
import {profileMiddleware} from '../modules/Profile/profileMiddleware';

export const initialState = {
    isAuthorized: false,
    isLoading: false,
    hasCard: false,
    token: '',
    error: '',
    cardNumber: '',
    expiryDate: '',
    cardName: '',
    cvc: ''
};

const reducers = combineReducers({loginReducer, postCardReducer, getCardReducer});

const createAuthStore = () => {
    const store = createStore(
        // loginReducer,
        reducers,
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