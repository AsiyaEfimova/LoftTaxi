import React from "react";

export const Login = {
    "login": (email, password) => {
        if(email && password){
            Login.isLoggedIn = true;
        }
        return Login.isLoggedIn;
    },
    "logout": () => {
        Login.isLoggedIn = false;
    },
    "isLoggedIn": false
};

export const Context = React.createContext(Login);