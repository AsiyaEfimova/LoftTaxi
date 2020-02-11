import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { loginReducer } from '../modules/Auth/authReducer';
import { cardReducer } from '../modules/Profile/profileReducer';
import {routeReducer} from '../modules/Routes/reducer';
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
    },
    routeReducer: {
        error: '',
        isLoading: false,
        coords: []
    }
};

const reducers = combineReducers({
    loginReducer,
    cardReducer,
    addressesReducer,
    routeReducer
});

const createAuthStore = () => {
    const store = createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : (noop) => noop
        )
    );

    sagaMiddleware.run(rootSaga);

    return store;
};

export default createAuthStore;