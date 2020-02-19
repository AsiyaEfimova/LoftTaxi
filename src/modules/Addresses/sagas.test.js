import { put, call } from 'redux-saga/effects';
import {
    fetchAddressesSuccess,
    fetchAddressesFailure
} from './actions';
import { fetchAddressList } from '../../api';
import { addressListSagaWorker } from './sagas';

describe('Тестирование addressListSagaWorker', () => {
    const testAction = {};
    it('addressListSagaWorker c success true', () => {
        const gen = addressListSagaWorker(testAction);
        expect(gen.next().value).toEqual(call(fetchAddressList, testAction.payload));
        const response = {
            addresses: ['Пулково (LED)','Шаверма на Невском','Инфекционная больница им. Боткина','Волковское кладбище']
        };
        expect(gen.next(response).value).toEqual(put(fetchAddressesSuccess(response)));
        expect(gen.next().done).toEqual(true)
    });
    it('addressListSagaWorker заканчивает работу с проблемой сети', () => {
        const error = new Error('error');
        const gen = addressListSagaWorker(testAction);
        expect(gen.next().value).toEqual(call(fetchAddressList, testAction.payload));
        expect(gen.throw(error).value).toEqual(put(fetchAddressesFailure(error)));
        expect(gen.next().done).toEqual(true)
    })
});