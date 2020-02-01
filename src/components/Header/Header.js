import React from 'react';
import logo from '../../img/logo.png';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLogOut } from '../../modules/Auth/authActions';

const Header = () => {
    const handleCkick = (e) => {
        e.preventDefault();

        getLogOut();
    };

    return (
        <div id="headerWrap">
            <header className="widthFix">
                <Link to="/">
                    <img src={logo} className="logo" alt="logo" />
                </Link>
                <nav className="topNav">
                    <Link to="/map" className="navLink">
                        Карта
                    </Link>
                    <Link to="/profile" className="navLink">
                        Профиль
                    </Link>
                    <a href="/" className="navLink" onClick={handleCkick}>
                        Выйти
                    </a>
                </nav>
            </header>
        </div>
    );
};

export default connect(null, getLogOut())(Header);