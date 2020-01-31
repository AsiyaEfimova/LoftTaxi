import React from 'react';
import Profile from '../Profile';
import Map from '../Map';
import Auth from '../Auth';
import PrivateRoute from './PrivateRouter';
import { Route, Switch } from 'react-router-dom';

const Router = () => {
    return (
        <Switch>
            <Route path="/" component={Auth} exact />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/map" component={Map} />
        </Switch>
    );
};

export default Router;
