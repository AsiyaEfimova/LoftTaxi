import {
    fetchAddressesRequest,
    fetchAddressesSuccess,
    fetchAddressesFailure
} from './actions';
import {initialState} from "../../store/store";

export const addressesReducer = (state = initialState.addressesReducer, action) => {
    switch (action.type) {
        case fetchAddressesRequest.toString():
            return { ...state, isLoading: true, error: '' };
        case fetchAddressesSuccess.toString():
            return { ...state, isLoading: false, addresses: action.payload.addresses, error: '' };
        case fetchAddressesFailure.toString():
            return { ...state, isLoading: false, error: action.payload.addresses.error };
        default:
            return state;
    }
};