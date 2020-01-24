import React, { Component } from 'react';
import './scss/app.scss';
import Router from './components/Router';

class App extends Component {
    // state = { page: 'profile' };
    state = { page: 'auth' };

    GoToPage = (page) => {
        this.setState({ page });
    };

    render() {
        const { page } = this.state;
        return (
            // <Context.Provider value={Login}>
                <Router route={page} pageSwitcher={this.GoToPage} />
            // </Context.Provider>
        );
    }
}

export default App;
