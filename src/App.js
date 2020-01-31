import React, { Component } from 'react';
import './scss/app.scss';
import Router from './components/Router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from './store/authStore';

const store = createStore();

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <Router />
                </Provider>
            </BrowserRouter>
        );
    }
}

export default App;
