import { takeLatest, call, put } from 'redux-saga/effects';
import {
    postLoginRequest,
    postLoginSuccess,
    postLoginFailure,
    postRegisterRequest,
    postRegisterSuccess,
    postRegisterFailure
} from './authActions';
import {postLogin, postRegister} from '../../api';
import {setItems, removeItems} from '../../services/localSrorage';

export function* loginSaga (){
    yield takeLatest(postLoginRequest, function*(action) {
        try {
            const response = yield call(postLogin, action.payload);
            yield put(postLoginSuccess(response));
            setItems('user', {
                email: action.payload.email,
                password: action.payload.password,
                token: response.token
            });
        } catch (error) {
            yield put(postLoginFailure(error));
            removeItems('user');
        }
    });
}
export function* registerSaga (){
    yield takeLatest(postRegisterRequest, function*(action) {
        try {
            const response = yield call(postRegister, action.payload);
            yield put(postRegisterSuccess(response));
            setItems('user', {
                email: action.payload.email,
                password: action.payload.password,
                name: action.payload.name,
                surname: action.payload.surname,
                token: response.token
            });
        } catch (error) {
            yield put(postRegisterFailure(error));
            removeItems('user');
        }
    });
}