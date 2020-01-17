import React, {Component} from 'react';
import logo from './img/logo.png';
import './scss/app.scss';

import {Map} from './map'
import {Login} from './login'
import {Profile} from './profile'
import Signup from './signup'

class App extends Component {
  state = {page: "signup"};

  SetPage = (e) => {
    e.preventDefault();
    let pageValue = e.target.getAttribute('data-page');
    this.GoToPage(pageValue);
  };

  GoToPage = (pageValue) => {
    this.setState({page: pageValue});
  };

  pages = {
    profile: <Profile />,
    map: <Map />,
    login: <Login />,
    signup: <Signup handler={this.GoToPage} />
  };

  render(){
    return (<div id="pageWrap">
      <div id="headerWrap">
        <header className="widthFix">
          <img src={logo} className="logo" alt="logo"/>
          <nav className="topNav">
            <span className="navLink" data-page="map" onClick={this.SetPage}>Карта</span>
            <span className="navLink" data-page="profile" onClick={this.SetPage}>Профиль</span>
            <span className="navLink" data-page="login" onClick={this.SetPage}>Войти</span>
            <span className="navLink" data-page="signup" onClick={this.SetPage}>Регистрация</span>
          </nav>
        </header>
      </div>
      <div id="page">
        {this.pages[this.state.page]}
      </div>
    </div>);
  }
}

export default App;