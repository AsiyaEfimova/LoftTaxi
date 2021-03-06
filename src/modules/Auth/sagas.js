import { takeLatest, call, put } from 'redux-saga/effects';
import {
    postLoginRequest,
    postLoginSuccess,
    postLoginFailure,
    postRegisterRequest,
    postRegisterSuccess,
    postRegisterFailure
} from './actions';
import {getCardSuccess} from '../Profile/actions'
import {postLogin, postRegister, fetchCard} from '../../api';
import {setItems, removeItems} from '../../services/localSrorage';

export function* fetchCardWorker (action){
    const response = yield call(fetchCard, action.payload);
    if(!response.error){
        yield put(getCardSuccess(response));
    }
}

export function* loginSagaWorker (action){
    try {
        const response = yield call(postLogin, action.payload);
        if(response.success) {
            yield call(fetchCardWorker, response.token);
            yield put(postLoginSuccess(response));
            setItems('user', {
                email: action.payload.email,
                password: action.payload.password,
                token: response.token
            });
        }else{
            yield put(postLoginFailure(response));
        }
    } catch (error) {
        yield put(postLoginFailure(error));
        removeItems('user');
    }
}

export function* registerSagaWorker (action){
    try {
        const response = yield call(postRegister, action.payload);
        if(response.success) {
            yield put(postRegisterSuccess(response));
            setItems('user', {
                email: action.payload.email,
                password: action.payload.password,
                name: action.payload.name,
                surname: action.payload.surname,
                token: response.token
            });
        }else{
            yield put(postRegisterFailure(response));
        }
    } catch (error) {
        yield put(postRegisterFailure(error));
        removeItems('user');
    }
}

export function* authSaga (){
    yield takeLatest(postLoginRequest, loginSagaWorker);
    yield takeLatest(postRegisterRequest, registerSagaWorker);
}