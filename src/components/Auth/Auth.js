import React from 'react';
import logo from '../../img/logo-white.png';
import Signup from './Signup';
import Signin from './Signin';

class Auth extends React.Component {
    state = {
        signIn: true
    };

    changeForm = (state) => {
        this.setState({
            signIn: state
        });
    };

    render() {
        const { signIn } = this.state;

        return (
            <div id="entryPage">
                <div className="widthFix">
                    <div className="content">
                        <div className="logoBox">
                            <img src={logo} className="logo" alt="logo" />
                        </div>
                        <div className="formBox">
                            {signIn ? (
                                <Signin changeForm={this.changeForm} />
                            ) : (
                                <Signup changeForm={this.changeForm} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Auth;
