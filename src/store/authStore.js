import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { loginReducer } from '../modules/Auth/authReducer';
import { postCardReducer } from '../modules/Profile/profileReducer';
import { getCardReducer } from '../modules/Profile/profileReducer';
import {authMiddleware} from '../modules/Auth/authMiddleware';
import {profileMiddleware} from '../modules/Profile/profileMiddleware';
import {authState} from '../modules/Auth/authReducer';
import {cardState} from '../modules/Profile/profileReducer';

// export const initialState = {
//     isAuthorized: false,
//     isLoading: false,
//     error: ''
// };

// export const appStore = {
//     auth: authState,
//     profile: cardState
// };

export const initialState = {
    loginReducer: {
        isLoading: false,
        isAuthorized: false,
        error: '',
        token: ''
    },
    postCardReducer: {
        isLoading: false,
        hasCard: false,
        token: '',
        cardNumber: '',
        expiryDate: '',
        cardName: '',
        cvc: ''
    },
    getCardReducer: {
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
    postCardReducer,
    getCardReducer
});

const createAuthStore = () => {
    const store = createStore(
        // loginReducer,
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