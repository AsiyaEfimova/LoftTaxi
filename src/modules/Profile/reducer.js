import {initialState} from '../../store/store';
import {postCardRequest, postCardSuccess, postCardFailure, getCardRequest, getCardSuccess, getCardFailure} from './actions';

export const cardReducer = (state = initialState.cardReducer, action) => {
    switch (action.type) {
        case postCardRequest.toString():
            return { ...state, isLoading: true, error: '' };
        case postCardSuccess.toString():
            return { ...state, isLoading: false, addedCard: true, hasCard: true, cardNumber: action.payload.cardNumber, expiryDate: action.payload.expiryDate, cardName: action.payload.cardName, cvc: action.payload.cvc, error: '' };
        case postCardFailure.toString():
            return { ...state, isLoading: false, addedCard: false, error: action.payload.error };
        case getCardRequest.toString():
            return { ...state, isLoading: true, error: '' };
        case getCardSuccess.toString():
            return { ...state, isLoading: false, hasCard: true, cardNumber: action.payload.cardNumber, expiryDate: action.payload.expiryDate, cardName: action.payload.cardName, cvc: action.payload.cvc, error: '' };
        case getCardFailure.toString():
            return { ...state, isLoading: false, hasCard: false, error: action.payload.error };
        default:
            return state;
    }
};