import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header';
import Profile from '../Profile';
import Map from '../Map';
import Auth from '../Auth';
import PrivateRoute from './PrivateRouter';
import { Route, Switch } from 'react-router-dom';
import {getIsAuthorized} from '../../modules/Auth/authSelectors';

const Router = () => {
    const isAuthorized = useSelector(getIsAuthorized);
    return (
        <>
            {isAuthorized && <Header />}
            <Switch>
                <Route path="/" component={Auth} exact />
                <PrivateRoute path="/profile" component={Profile} />
                <PrivateRoute path="/map" component={Map} />
            </Switch>
        </>
    );
};

export default Router;
