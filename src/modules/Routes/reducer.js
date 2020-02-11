import {
    fetchRouteRequest,
    fetchRouteSuccess,
    fetchRouteFailure
} from './actions';
import {initialState} from "../../store/authStore";

export const routeReducer = (state = initialState.routeReducer, action) => {
    switch (action.type) {
        case fetchRouteRequest.toString():
            return { ...state, isLoading: true, error: '' };
        case fetchRouteSuccess.toString():
            return { ...state, isLoading: false, coords: action.payload, error: '' };
        case fetchRouteFailure.toString():
            return { ...state, isLoading: false, error: action.payload.error };
        default:
            return state;
    }
};
// export default routeReducer;