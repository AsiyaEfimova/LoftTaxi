import { fork } from 'redux-saga/effects';
import {authSaga} from "./Auth/sagas";
import {cardSaga} from "./Profile/sagas";
import {addressListSaga} from "./Addresses/sagas";
import {routeSaga} from "./Routes";

export function* rootSaga() {
    yield fork(authSaga);
    yield fork(cardSaga);
    yield fork(addressListSaga);
    yield fork(routeSaga);
}
