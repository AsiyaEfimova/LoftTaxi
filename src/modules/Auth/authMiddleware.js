import {
    getLoginRequest,
    getLoginSuccess,
    getLoginFailure,
    getRegisterRequest,
    getRegisterSuccess,
    getRegisterFailure
} from './authActions';

export const authMiddleware = store => next => action => {
    switch(action.type){
        case getLoginRequest.toString():
            fetch('https://loft-taxi.glitch.me/auth', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(action.payload)
            })
            .then(response => response.json())
            .then(response => {
                (response.success) ?
                    store.dispatch(getLoginSuccess(response)):
                    store.dispatch(getLoginFailure(response));
            })
            .catch(error => {
                store.dispatch(getLoginFailure(error));
            });
            break;
        case getRegisterRequest.toString():
            fetch('https://loft-taxi.glitch.me/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(action.payload)
            })
                .then(response => response.json())
                .then(response => {
                    (response.success) ?
                        store.dispatch(getRegisterSuccess(response)):
                        store.dispatch(getRegisterFailure(response));
                })
                .catch(error => {
                    store.dispatch(getRegisterFailure(error));
                });
            break;
        default: break;
    }
    return next(action);
};