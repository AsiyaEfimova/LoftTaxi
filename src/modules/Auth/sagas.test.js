import { put, call } from 'redux-saga/effects';
import {
    postLoginSuccess,
    postLoginFailure,
    postRegisterSuccess,
    postRegisterFailure
} from './actions';
import { postLogin, postRegister } from '../../api';
import { loginSagaWorker, registerSagaWorker } from './sagas';

describe('Тестирование loginSagaWorker', () => {
    const testAction = {
        payload: 'test'
    };
    it('loginSagaWorker c success true', () => {
        const gen = loginSagaWorker(testAction);
        expect(gen.next().value).toEqual(call(postLogin, testAction.payload));
        const response = {
            success: true,
            token: 'test'
        };
        expect(gen.next(response).value).toEqual(put(postLoginSuccess(response)));
        expect(gen.next().done).toEqual(true)
    });
    it('loginSagaWorker c success false', () => {
        const gen = loginSagaWorker(testAction);
        expect(gen.next().value).toEqual(call(postLogin, testAction.payload));
        const response = {
            success: false,
            error: 'test'
        };
        expect(gen.next(response).value).toEqual(put(postLoginFailure(response)));
        expect(gen.next().done).toEqual(true)
    });
    it('signUpSagaWorker заканчивает работу с проблемой сети', () => {
        const error = new Error('error');
        const gen = loginSagaWorker(testAction);
        expect(gen.next().value).toEqual(call(postLogin, testAction.payload));
        expect(gen.throw(error).value).toEqual(put(postLoginFailure(error)));
        expect(gen.next().done).toEqual(true)
    })
});

describe('Тестирование registerSagaWorker', () => {
    const testAction = {
        payload: 'test'
    };
    it('registerSagaWorker c success true', () => {
        const gen = registerSagaWorker(testAction);
        expect(gen.next().value).toEqual(call(postRegister, testAction.payload));
        const response = {
            success: true,
            token: 'test'
        };
        expect(gen.next(response).value).toEqual(put(postRegisterSuccess(response)));
        expect(gen.next().done).toEqual(true)
    });
    it('registerSagaWorker c success false', () => {
        const gen = registerSagaWorker(testAction);
        expect(gen.next().value).toEqual(call(postRegister, testAction.payload));
        const response = {
            success: false,
            error: 'test'
        };
        expect(gen.next(response).value).toEqual(put(postRegisterFailure(response)));
        expect(gen.next().done).toEqual(true)
    });
    it('registerSagaWorker заканчивает работу с проблемой сети', () => {
        const error = new Error('error');
        const gen = registerSagaWorker(testAction);
        expect(gen.next().value).toEqual(call(postRegister, testAction.payload));
        expect(gen.throw(error).value).toEqual(put(postRegisterFailure(error)));
        expect(gen.next().done).toEqual(true)
    })
});