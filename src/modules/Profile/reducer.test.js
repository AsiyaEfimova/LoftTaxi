import {cardReducer} from './reducer'

describe('Тестирование редьюсера cardReducer', () => {
    it("Тест postCardRequest", () => {
        let result = cardReducer({}, {type: 'POST_CARD_REQUEST'});
        expect(result.isLoading).toBe(true);
        expect(result.error === '').toBe(true);
    });
    it("Тест postCardSuccess", () => {
        let result = cardReducer({}, {type: 'POST_CARD_SUCCESS'});
        expect(result.isLoading).toBe(false);
        expect(result.hasCard).toBe(true);
        expect(result.error === '').toBe(true);
    });
    it("Тест postCardFailure", () => {
        let result = cardReducer({}, {type: 'POST_CARD_FAILURE', payload: {success: false, error: 'error'}});
        expect(result.isLoading).toBe(false);
        expect(result.hasCard).toBe(false);
        expect(result.error !== '').toBe(true);
    });
    it("Тест getCardRequest", () => {
        let result = cardReducer({}, {type: 'GET_CARD_REQUEST'});
        expect(result.isLoading).toBe(true);
        expect(result.error === '').toBe(true);
    });
    it("Тест getCardSuccess", () => {
        let result = cardReducer({}, {type: 'GET_CARD_SUCCESS', payload: {cardNumber: 1111111111111, expiryDate: '21/12', cardName: 'cardName', cvc: '123', error: ''}});
        expect(result.isLoading).toBe(false);
        expect(result.hasCard).toBe(true);
        expect(result.error === '').toBe(true);
        expect(result.cardNumber !== '').toBe(true);
        expect(result.expiryDate !== '').toBe(true);
        expect(result.cardName !== '').toBe(true);
        expect(result.cvc !== '').toBe(true);
    });
    it("Тест getCardFailure", () => {
        let result = cardReducer({}, {type: 'GET_CARD_FAILURE', payload: {success: false, error: 'error'}});
        expect(result.isLoading).toBe(false);
        expect(result.hasCard).toBe(false);
        expect(result.error !== '').toBe(true);
    });
});