import React from 'react';
import Profile from '../Profile';
import Map from '../Map';
import Auth from '../Auth';
import PropTypes from "prop-types";
import { Route, Redirect, Switch } from 'react-router-dom';

class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={Auth} exact />
                <Route path="/map" component={Map} />
                <Route path="/profile" component={Profile} />
                <Redirect to="/" />
            </Switch>
        );
    }
}
Router.propTypes = {
    pageSwitcher: PropTypes.func.isRequired,
    route: PropTypes.string.isRequired
};
export default Router;
