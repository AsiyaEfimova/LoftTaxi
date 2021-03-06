import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header';
import Profile from '../Profile';
import Map from '../Map';
import Auth from '../Auth';
import ErrorPage from "../ErrorPage";
import PrivateRoute from './PrivateRouter';
import {Route, Switch} from 'react-router-dom';
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
                <Route path="*" component={ErrorPage} />
            </Switch>
        </>
    );
};

export default Router;
