import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo-white.png';

const errorPage = () => {
    console.log(1);
    return (
        <div id="page">
            <div className="widthFix">
                <div className="content">
                    <div className="errorPage">
                        <div className="logoBox">
                            <img src={logo} className="logo" alt="logo" />
                        </div>
                        <div className="errorBox">
                            <h1>404</h1>
                            <Link to="/map">Перейти на карту</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default errorPage;