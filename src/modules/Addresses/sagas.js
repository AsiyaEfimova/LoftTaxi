import { put, call, takeLatest } from 'redux-saga/effects';
import {
    fetchAddressesRequest,
    fetchAddressesSuccess,
    fetchAddressesFailure
} from './actions';
import {fetchAddressList} from '../../api';

export function* addressListSagaWorker (action){
    try {
        const response = yield call(fetchAddressList, action.payload);
        yield put(fetchAddressesSuccess(response));
    } catch (error) {
        yield put(fetchAddressesFailure(error));
    }
}
export function* addressListSaga (){
    yield takeLatest(fetchAddressesRequest, addressListSagaWorker);
}