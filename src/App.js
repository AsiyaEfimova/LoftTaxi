import React, {Component} from 'react';
import logo from './img/logo.png';
import './scss/app.scss';

import {Map} from './map'
import {Login} from './login'
import {Profile} from './profile'
import {Signup} from './signup'

const PAGES = {
  profile: <Profile />,
  map: <Map />,
  login: <Login />,
  signup: <Signup />
};

class App extends Component {
  state = {page: "login"};

  SetPage = (e) => {
    e.preventDefault();
    let pageValue = e.target.getAttribute('href');
    this.setState({page: pageValue});
  };

  render() {
    return (<div id="pageWrap">
      <div id="headerWrap">
        <header className="widthFix">
          <img src={logo} className="logo" alt="logo"/>
          <nav className="topNav">
            <a href="map" onClick={this.SetPage}>Карта</a>
            <a href="profile" onClick={this.SetPage}>Профиль</a>
            <a href="login" onClick={this.SetPage}>Войти</a>
            <a href="signup" onClick={this.SetPage}>Регистрация</a>
          </nav>
        </header>
      </div>
      <div id="page">
        {PAGES[this.state.page]}
      </div>
    </div>);
  }
}

export default App;
