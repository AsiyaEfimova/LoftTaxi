import React, { Component } from 'react';
import logo from '../../img/logo.png';
// import {Context} from '../../context';
// import PropTypes from "prop-types";
import { BrowserRouter, Link, withRouter } from 'react-router-dom';
import {store} from "../../context";

const Header = () => {
    const HandleClick = (pageValue) => (e) => {
        e.preventDefault();
        // if(!pageValue) {
        //     this.context.logout();
        //     pageValue = 'auth';
        // }
        // this.props.routeHandler(pageValue);
    };
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
                    <a
                        href="/"
                        className="navLink"
                        onClick={store.dispatch({type:"LOGOUT"})}
                    >
                        Выйти
                    </a>
                </nav>
            </header>
        </div>
    );
};
// Header.contextType = Context;
// Header.propTypes = {
//     routeHandler: PropTypes.func.isRequired
// };
export default Header;
