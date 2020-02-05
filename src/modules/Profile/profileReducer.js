import {initialState} from '../../store/authStore';
import {postCardRequest, postCardSuccess, postCardFailure, getCardRequest, getCardSuccess, getCardFailure} from './profileActions';

export const cardReducer = (state = initialState.cardReducer, action) => {
    switch (action.type) {
        case postCardRequest.toString():
            return { ...state, isLoading: true, error: '' };
        case postCardSuccess.toString():
            return { ...state, isLoading: false, hasCard: action.payload.success, error: '' };
        case postCardFailure.toString():
            return { ...state, isLoading: false, hasCard: action.payload.success, error: action.payload.error };
        case getCardRequest.toString():
            return { ...state, isLoading: true, error: '' };
        case getCardSuccess.toString():
            console.log(action.payload);
            return { ...state, isLoading: false, hasCard: action.payload.success, cardNumber: action.payload.cardNumber, expiryDate: action.payload.expiryDate, cardName: action.payload.cardName, cvc: action.payload.cvc, error: '' };
        case getCardFailure.toString():
            return { ...state, isLoading: false, hasCard: action.payload.success, error: action.payload.error };
        default:
            return state;
    }
};