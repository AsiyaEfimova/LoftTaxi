import {loginSaga, registerSaga} from "../modules/Auth/authSagas";
import {postCardSaga} from "../modules/Profile/profileSagas";
import {fetchCardSaga} from "../modules/Profile/profileSagas";
import {addressListSaga} from "../modules/Addresses/addressSagas";
import {routeSaga} from "../modules/Routes";
import { fork } from 'redux-saga/effects';

export function* rootSaga() {
    yield fork(loginSaga);
    yield fork(registerSaga);
    yield fork(postCardSaga);
    yield fork(fetchCardSaga);
    yield fork(addressListSaga);
    yield fork(routeSaga);
}
