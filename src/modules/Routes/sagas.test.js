import { put, call } from 'redux-saga/effects';
import {
    fetchRouteSuccess,
    fetchRouteFailure
} from './actions';
import {fetchRoute} from '../../api';
import { routeSagaWorker } from './sagas';

describe('Тестирование routeSagaWorker', () => {
    const testAction = {
        payload: 'test'
    };
    it('routeSagaWorker c success true', () => {
        const gen = routeSagaWorker(testAction);
        expect(gen.next().value).toEqual(call(fetchRoute, testAction.payload));
        const response = {
            success: true
        };
        expect(gen.next(response).value).toEqual(put(fetchRouteSuccess(response)));
        expect(gen.next().done).toEqual(true)
    });
    it('routeSagaWorker заканчивает работу с проблемой сети', () => {
        const error = new Error('error');
        const gen = routeSagaWorker(testAction);
        expect(gen.next().value).toEqual(call(fetchRoute, testAction.payload));
        expect(gen.throw(error).value).toEqual(put(fetchRouteFailure(error)));
        expect(gen.next().done).toEqual(true)
    })
});