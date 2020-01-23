import React, { Component } from 'react';
import logo from '../../img/logo.png';
import {Context} from '../../App';

class Header extends Component {
    AuthInfo = Context.Provider._context._currentValue;
    HandleClick = (pageValue) => (e) => {
        e.preventDefault();
        if(!pageValue) {
            this.AuthInfo.logout();
            pageValue = 'auth';
        }
        this.props.routeHandler(pageValue);
    };
    render() {
        return (
            <div id="headerWrap">
                <header className="widthFix">
                    <img src={logo} className="logo" alt="logo" />
                    <nav className="topNav">
                        <a
                            href="/"
                            className="navLink"
                            onClick={this.HandleClick('map')}
                        >
                            Карта
                        </a>
                        <a
                            href="/"
                            className="navLink"
                            onClick={this.HandleClick('profile')}
                        >
                            Профиль
                        </a>
                        <a
                            href="/"
                            className="navLink"
                            onClick={this.HandleClick()}
                        >
                            Выйти
                        </a>
                    </nav>
                </header>
            </div>
        );
    }
}
export default Header;
