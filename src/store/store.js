import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { loginReducer } from '../modules/Auth/reducer';
import { cardReducer } from '../modules/Profile/reducer';
import {routeReducer} from '../modules/Routes/reducer';
import {addressesReducer} from '../modules/Addresses/reducer';
import createSagaMiddleWare from 'redux-saga';
import { rootSaga } from '../modules/rootSaga';
import {getItems} from '../services/localSrorage';

const sagaMiddleware = createSagaMiddleWare();

export const initialState = {
    loginReducer: {
        isLoading: false,
        isAuthorized: false,
        error: '',
        token: '',
        login: '',
        password: ''
    },
    cardReducer: {
        isLoading: false,
        hasCard: false,
        addedCard: false,
        error: '',
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

let savedInfo = getItems('user');
if(savedInfo!==null){
    initialState.loginReducer.isAuthorized = true;
    initialState.loginReducer.login = savedInfo.email;
    initialState.loginReducer.password = savedInfo.password;
    initialState.loginReducer.token = savedInfo.token;
}

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