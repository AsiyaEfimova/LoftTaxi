import {initialState} from '../../store/authStore';
import {postCardRequest, postCardSuccess, postCardFailure, getCardRequest, getCardSuccess, getCardFailure} from './profileActions';

export const postCardReducer = (state = initialState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case postCardRequest.toString():
            return { ...state, isLoading: true, error: '' };
        case postCardSuccess.toString():
            return { ...state, isLoading: false, hasCard: action.payload.success, error: '' };
        case postCardFailure.toString():
            return { ...state, isLoading: false, hasCard: action.payload.success, error: action.payload.error };
        default:
            return state;
    }
};
export const getCardReducer = (state = initialState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case getCardRequest.toString():
            return { ...state, isLoading: true, error: '' };
        case getCardSuccess.toString():
            return { ...state, isLoading: false, hasCard: action.payload.success, cardNumber: action.payload.cardNumber, expiryDate: action.payload.expiryDate, cardName: action.payload.cardName, cvc: action.payload.cvc, error: '' };
        case getCardFailure.toString():
            return { ...state, isLoading: false, hasCard: action.payload.success, error: action.payload.error };
        default:
            return state;
    }
};