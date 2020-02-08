import { takeLatest, call, put } from 'redux-saga/effects';
import {
    postCardRequest,
    postCardSuccess,
    postCardFailure,
    getCardRequest,
    getCardSuccess,
    getCardFailure
} from './profileActions';
import {postCard, fetchCard} from '../../api';

export function* postCardSaga (){
    yield takeLatest(postCardRequest, function*(action) {
        try {
            const response = yield call(postCard, action.payload);
            yield put(postCardSuccess(response));
        } catch (error) {
            yield put(postCardFailure(error));
        }
    });
}

export function* fetchCardSaga (){
    yield takeLatest(getCardRequest, function*(action) {
        try {
            const response = yield call(fetchCard, action.payload);
            yield put(getCardSuccess(response));
        } catch (error) {
            yield put(getCardFailure(error));
        }
    });
}