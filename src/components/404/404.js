import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo-white.png';

const error404 = () => {
    console.log(1);
    return (
        <div id="entryPage">
            <div className="widthFix">
                <div className="content">
                    <div className="errorBox">
                        <div className="logoBox">
                            <img src={logo} className="logo" alt="logo" />
                        </div>
                        <h1>404</h1>
                        <Link to="/map">Перейти на карту</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default error404;