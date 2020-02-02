import {
    postLoginRequest,
    postLoginSuccess,
    postLoginFailure,
    postRegisterRequest,
    postRegisterSuccess,
    postRegisterFailure
} from './authActions';

export const authMiddleware = store => next => action => {
    switch(action.type){
        case postLoginRequest.toString():
            fetch('https://loft-taxi.glitch.me/auth', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(action.payload)
            })
            .then(response => response.json())
            .then(response => {
                (response.success) ?
                    store.dispatch(postLoginSuccess(response)):
                    store.dispatch(postLoginFailure(response));
            })
            .catch(error => {
                store.dispatch(postLoginFailure(error));
            });
            break;
        case postRegisterRequest.toString():
            fetch('https://loft-taxi.glitch.me/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(action.payload)
            })
                .then(response => response.json())
                .then(response => {
                    (response.success) ?
                        store.dispatch(postRegisterSuccess(response)):
                        store.dispatch(postRegisterFailure(response));
                })
                .catch(error => {
                    store.dispatch(postRegisterFailure(error));
                });
            break;
        default: break;
    }
    return next(action);
};