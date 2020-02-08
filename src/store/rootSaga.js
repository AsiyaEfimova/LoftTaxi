import {loginSaga, registerSaga} from "../modules/Auth/authSagas";
import {postCardSaga} from "../modules/Profile/profileSagas";
import {fetchCardSaga} from "../modules/Profile/profileSagas";
import { fork } from 'redux-saga/effects';

export function* rootSaga() {
    yield fork(loginSaga);
    yield fork(registerSaga);
    yield fork(postCardSaga);
    yield fork(fetchCardSaga);
}
