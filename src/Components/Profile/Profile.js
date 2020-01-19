import React from 'react';
import Header from "../Header";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.routeHandler = props.routeHandler;
    }
    render() {
        return (
            <>
                <Header routeHandler={this.routeHandler} />
                <div id="page">
                    <h1>Profile</h1>
                </div>
            </>
        );
    }
}
export default Profile;