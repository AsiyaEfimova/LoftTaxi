import { takeLatest, call, put } from 'redux-saga/effects';
import {
    postCardRequest,
    postCardSuccess,
    postCardFailure,
    getCardRequest,
    getCardSuccess,
    getCardFailure
} from './actions';
import {postCard, fetchCard} from '../../api';

export function* postCardSagaWorker (action){
    try {
        const response = yield call(postCard, action.payload);
        response.success ?
            yield put(postCardSuccess(response)) :
            yield put(postCardFailure(response));
    } catch (error) {
        yield put(postCardFailure(error));
    }
}

export function* fetchCardSagaWorker (action){
    try {
        const response = yield call(fetchCard, action.payload);
        response.error ?
            yield put(getCardFailure(response)) :
            yield put(getCardSuccess(response));
    } catch (error) {
        yield put(getCardFailure(error));
    }
}

export function* cardSaga (){
    yield takeLatest(postCardRequest, postCardSagaWorker);
    yield takeLatest(getCardRequest, fetchCardSagaWorker);
}