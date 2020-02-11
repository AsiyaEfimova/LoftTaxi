import {
    fetchAddressesRequest,
    fetchAddressesSuccess,
    fetchAddressesFailure
} from './addressActions';
import {initialState} from "../../store/authStore";

export const addressesReducer = (state = initialState.addressesReducer, action) => {
    switch (action.type) {
        case fetchAddressesRequest.toString():
            return { ...state, isLoading: true, error: '' };
        case fetchAddressesSuccess.toString():
            return { ...state, isLoading: false, addresses: action.payload, error: '' };
        case fetchAddressesFailure.toString():
            return { ...state, isLoading: false, error: action.payload.error };
        default:
            return state;
    }
};