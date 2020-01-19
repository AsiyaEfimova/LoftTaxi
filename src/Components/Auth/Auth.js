import React from 'react';
import logo from '../../img/logo-white.png';
import Signup from "./Signup";
import Signin from "./Signin";

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.routeHandler = props.routeHandler;
    }
    HandlerSubmit = () => {
        this.routeHandler("map");
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
                            <Signup submit={this.HandlerSubmit}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Auth;