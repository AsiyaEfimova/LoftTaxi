import React from 'react';
import logo from '../../img/logo-white.png';
import Signup from "./Signup";

class Auth extends React.Component {
    HandlerSubmit = () => {
        this.props.routeHandler("map");
    };
    render() {
        return (
            <div id="entryPage">
                <div className="widthFix">
                    <div className="content">
                        <div className="logoBox">
                            <img src={logo} className="logo" alt="logo"/>
                        </div>
                        <div className="formBox">
                            <Signup handlerSubmit={this.HandlerSubmit}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Auth;