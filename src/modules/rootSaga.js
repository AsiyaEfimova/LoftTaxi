import { fork } from 'redux-saga/effects';
import {loginSaga, registerSaga} from "./Auth/sagas";
import {postCardSaga} from "./Profile/sagas";
import {fetchCardSaga} from "./Profile/sagas";
import {addressListSaga} from "./Addresses/sagas";
import {routeSaga} from "./Routes";

export function* rootSaga() {
    yield fork(loginSaga);
    yield fork(registerSaga);
    yield fork(postCardSaga);
    yield fork(fetchCardSaga);
    yield fork(addressListSaga);
    yield fork(routeSaga);
}
