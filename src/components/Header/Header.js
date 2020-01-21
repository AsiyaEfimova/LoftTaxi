import React, {Component} from 'react';
import logo from '../../img/logo.png';

class Header extends Component {
    HandleClick = (pageValue) => (e) => {
        e.preventDefault();
        this.props.routeHandler(pageValue);
    };
    render(){
        return (
            <div id="headerWrap">
                <header className="widthFix">
                    <img src={logo} className="logo" alt="logo"/>
                    <nav className="topNav">
                        <a href="/" className="navLink" onClick={this.HandleClick("map")}>Карта</a>
                        <a href="/" className="navLink" onClick={this.HandleClick("profile")}>Профиль</a>
                        <a href="/" className="navLink" onClick={this.HandleClick("auth")}>Выйти</a>
                        <a href="/" className="navLink" onClick={this.HandleClick("auth")}>Регистрация</a>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;