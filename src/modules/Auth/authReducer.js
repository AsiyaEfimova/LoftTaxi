import initialState from '../../store/authStore'

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isAuthorized: true };
        case 'LOGOUT':
            return { ...state, isAuthorized: false };
        default:
            return state;
    }
};