import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header';
import Profile from '../Profile';
import Map from '../Map';
import Auth from '../Auth';
import error404 from "../404";
import PrivateRoute from './PrivateRouter';
import {Redirect, Route, Switch} from 'react-router-dom';
import {getIsAuthorized} from '../../modules/Auth/selectors';

const Router = () => {
    const isAuthorized = useSelector(getIsAuthorized);
    return (
        <>
            {isAuthorized && <Header />}
            <Switch>
                <Route path="/" component={Auth} exact />
                <Route path="/signin" component={Auth} />
                <Route path="/signup" component={Auth} />
                <PrivateRoute path="/profile" component={Profile} />
                <PrivateRoute path="/map" component={Map} />
                <Route path="*" component={error404} />
            </Switch>
        </>
    );
};

export default Router;
