import React, { Component } from 'react';
import logo from '../../img/logo.png';
import {Context} from '../../context';
import PropTypes from "prop-types";
import { BrowserRouter, Link, withRouter } from 'react-router-dom';

class Header extends Component {
    HandleClick = (pageValue) => (e) => {
        e.preventDefault();
        if(!pageValue) {
            this.context.logout();
            pageValue = 'auth';
        }
        this.props.routeHandler(pageValue);
    };
    render() {
        return (
            <div id="headerWrap">
                <header className="widthFix">
                    <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
                    <nav className="topNav">
                        <Link
                            to="/map"
                            className="navLink"
                        >
                            Карта
                        </Link>
                        <Link
                            to="/profile"
                            className="navLink"
                        >
                            Профиль
                        </Link>
                        <Link
                            to="/"
                            className="navLink"
                        >
                            Выйти
                        </Link>
                    </nav>
                </header>
            </div>
        );
    }
}
Header.contextType = Context;
// Header.propTypes = {
//     routeHandler: PropTypes.func.isRequired
// };
export default Header;
