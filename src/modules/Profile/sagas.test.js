import { put, call } from 'redux-saga/effects';
import {
    postCardSuccess,
    postCardFailure,
    getCardSuccess,
    getCardFailure
} from './actions';
import {postCard, fetchCard, postLogin} from '../../api';
import { postCardSagaWorker, fetchCardSagaWorker } from './sagas';
import {loginSagaWorker} from "../Auth/sagas";
import {postLoginFailure} from "../Auth/actions";

describe('Тестирование postCardSagaWorker', () => {
    const testAction = {
        payload: 'test'
    };
    it('postCardSagaWorker c success true', () => {
        const gen = postCardSagaWorker(testAction);
        expect(gen.next().value).toEqual(call(postCard, testAction.payload));
        const response = {
            success: true
        };
        expect(gen.next(response).value).toEqual(put(postCardSuccess(response)));
        expect(gen.next().done).toEqual(true)
    });
    it('postCardSagaWorker заканчивает работу с проблемой сети', () => {
        const error = new Error('error');
        const gen = postCardSagaWorker(testAction);
        expect(gen.next().value).toEqual(call(postCard, testAction.payload));
        expect(gen.throw(error).value).toEqual(put(postCardFailure(error)));
        expect(gen.next().done).toEqual(true)
    })
});

describe('Тестирование fetchCardSagaWorker', () => {
    const testAction = {
        payload: 'test'
    };
    it('fetchCardSagaWorker c success true', () => {
        const gen = fetchCardSagaWorker(testAction);
        expect(gen.next().value).toEqual(call(fetchCard, testAction.payload));
        const response = {
            cardNumber: 'cardNumber',
            expiryDate: 'expiryDate',
            cardName: 'cardName',
            cvc: 'cvc'
        };
        expect(gen.next(response).value).toEqual(put(getCardSuccess(response)));
        expect(gen.next().done).toEqual(true)
    });
    it('fetchCardSagaWorker c success false', () => {
        const gen = fetchCardSagaWorker(testAction);
        expect(gen.next().value).toEqual(call(fetchCard, testAction.payload));
        const response = {
            success: false,
            error: 'test'
        };
        expect(gen.next(response).value).toEqual(put(getCardFailure(response)));
        expect(gen.next().done).toEqual(true)
    });
    it('fetchCardSagaWorker заканчивает работу с проблемой сети', () => {
        const error = new Error('error');
        const gen = fetchCardSagaWorker(testAction);
        expect(gen.next().value).toEqual(call(fetchCard, testAction.payload));
        expect(gen.throw(error).value).toEqual(put(getCardFailure(error)));
        expect(gen.next().done).toEqual(true)
    })
});