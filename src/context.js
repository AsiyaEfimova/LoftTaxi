import React from "react";
import {createStore} from "redux";

// export const Login = {
//     "login": (email, password) => {
//         if(email && password){
//             Login.isLoggedIn = true;
//         }
//         return Login.isLoggedIn;
//     },
//     "logout": () => {
//         Login.isLoggedIn = false;
//     },
//     "isLoggedIn": false
// };
//
// export const Context = React.createContext(Login);

const LoginReduser = (state,action) => {
    switch (action.type) {
        case "LOGIN":
            state.isAuthorized = true;
            break;
        case "LOGOUT":
            state.isAuthorized = false;
            break;
        default: break;
    }
    console.log(action.type, state);
    return state;
};
let state = {
    isAuthorized: false
};
export let store = createStore(LoginReduser,state);