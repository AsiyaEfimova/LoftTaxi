import React from 'react';
import Header from "../Header";

class Profile extends React.Component {
    render() {
        return (
            <>
                <Header routeHandler={this.props.routeHandler} />
                <div id="page">
                    <h1>Profile</h1>
                </div>
            </>
        );
    }
}
export default Profile;