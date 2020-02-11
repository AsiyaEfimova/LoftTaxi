import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { loginReducer } from '../modules/Auth/authReducer';
import { cardReducer } from '../modules/Profile/profileReducer';
// import {profileMiddleware} from '../modules/Profile/profileMiddleware';
import {addressesReducer} from '../modules/Addresses/addressReducer';
import createSagaMiddleWare from 'redux-saga';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleWare();

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
        cardNumber: '',
        expiryDate: '',
        cardName: '',
        cvc: ''
    },
    addressesReducer: {
        error: '',
        isLoading: false,
        addresses: []
    }
};

const reducers = combineReducers({
    loginReducer,
    cardReducer,
    addressesReducer
});

const createAuthStore = () => {
    const store = createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(sagaMiddleware),
            // applyMiddleware(profileMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : (noop) => noop
        )
    );

    sagaMiddleware.run(rootSaga);

    return store;
};

export default createAuthStore;