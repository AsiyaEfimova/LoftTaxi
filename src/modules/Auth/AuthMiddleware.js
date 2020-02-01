import {getLoginRequest, getLoginSuccess, getLoginFailure} from './authActions';

export const authMiddleware = store => next => action => {
    // console.log(action);
    if(action.type === getLoginRequest.toString()){
        fetch('https://loft-taxi.glitch.me/auth', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(action.payload)
        })
        .then(response => response.json())
        .then(response => {
            (response.success) ?
                store.dispatch(getLoginSuccess(response.success, response.token)):
                store.dispatch(getLoginFailure(response.error));
        })
        .catch(error => {
            store.dispatch(getLoginFailure(error));
        });
    }
    return next(action);
};