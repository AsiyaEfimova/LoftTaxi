import { put, call, takeLatest } from 'redux-saga/effects';
import {
    fetchRouteRequest,
    fetchRouteSuccess,
    fetchRouteFailure
} from './actions';
import {fetchRoute} from '../../api';

export function* routeSagaWorker (action){
    try {
        const response = yield call(fetchRoute, action.payload);
        yield put(fetchRouteSuccess(response));
    } catch (error) {
        yield put(fetchRouteFailure(error));
    }
}

export function* routeSaga (){
    yield takeLatest(fetchRouteRequest, routeSagaWorker);
}