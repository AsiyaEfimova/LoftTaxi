import React from 'react';
import Profile from '../Profile';
import Map from '../Map';
import Auth from '../Auth';
import PropTypes from "prop-types";
import { Route, Redirect, Switch } from 'react-router-dom';
// import {store} from "../../context";
import {connect} from 'react-redux';

let PrivateRoute = () => {
    const isAuthorized = true;
    console.log(isAuthorized);
    return <Route
            render={routeProps =>
                isAuthorized ? (
                    <Route {...routeProps} />
                ) : (
                    <Redirect to={"/"} />
                )
            }
        />;
};

const Router = () => {
    return (
        <Switch>
            <PrivateRoute component={Map} path="/map"/>
            <Route path="/" component={Auth} exact />
            <Route path="/map" component={Map} />
            <Route path="/profile" component={Profile} />
            <Redirect to="/" />
        </Switch>
    );
};
// store.subscribe(()=>{
//     const isAuthorized = store.getState().isAuthorized;
//     Router();
// });
let mapStateToProps = (state, ownProps) => {
    console.log(state);
    return state;
};

export default connect (
    mapStateToProps
)(Router);




// export default Router;
