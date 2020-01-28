import React, { Component } from 'react';
import './scss/app.scss';
import Router from './components/Router';
import { BrowserRouter, Link, withRouter } from 'react-router-dom';

class App extends Component {
    state = { page: 'auth' };

    GoToPage = (page) => {
        this.setState({ page });
    };

    render() {
        const { page } = this.state;
        return (
            <BrowserRouter>
                <Router route={page} pageSwitcher={this.GoToPage} />
            </BrowserRouter>
        );
    }
}

export default App;
