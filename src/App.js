import React, { Component } from 'react';
import './scss/app.scss';
import Router from './components/Router';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {store} from "./context";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
