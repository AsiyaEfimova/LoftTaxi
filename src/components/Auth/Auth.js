import React from 'react';
import logo from '../../img/logo-white.png';
import Signup from './Signup';
import Signin from './Signin';
import PropTypes from 'prop-types';

class Auth extends React.Component {
    HandlerSubmit = () => {
        this.props.routeHandler('map');
    };
    render() {
        return (
            <div id="entryPage">
                <div className="widthFix">
                    <div className="content">
                        <div className="logoBox">
                            <img src={logo} className="logo" alt="logo" />
                        </div>
                        <div className="formBox">
                            <Signin />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
// Auth.propTypes = {
//     routeHandler: PropTypes.func.isRequired
// };
export default Auth;
