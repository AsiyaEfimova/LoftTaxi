import React from 'react';
import logo from '../../img/logo-white.png';
import Signup from './Signup';
import Signin from './Signin';

class Auth extends React.Component {
    render() {
        const signUp = this.props.location.pathname === '/signup';

        return (
            <div id="entryPage">
                <div className="widthFix">
                    <div className="content">
                        <div className="logoBox">
                            <img src={logo} className="logo" alt="logo" />
                        </div>
                        <div className="formBox">
                            {signUp ? (
                                <Signup />
                            ) : (
                                <Signin />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Auth;
