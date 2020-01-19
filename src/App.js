import React, {Component} from 'react';
import './scss/app.scss';

import Router from './Components/Router'

class App extends Component {
  state = {page: "auth"};

  GoToPage = (page) => {
    this.setState({page: page});
  };

  render(){
    const page = this.state.page;
    return (
      <Router route={page} pageSwitcher={this.GoToPage} />
    );
  }
}

export default App;