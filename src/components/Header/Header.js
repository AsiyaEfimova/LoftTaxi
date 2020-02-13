import React from 'react';
import logo from '../../img/logo.png';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {postLogOut} from '../../modules/Auth/actions';
import {removeItems} from '../../services/localSrorage';

const Header = (props) => {
    const handleCkick = (e) => {
        e.preventDefault();
        removeItems('user');
        const {postLogOut} = props;
        postLogOut({success: false, error: ''});
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

const mapStateToProps = (state) => state.loginReducer;

const mapDispatchToProps = {
    postLogOut
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);