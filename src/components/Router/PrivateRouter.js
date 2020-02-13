import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getIsAuthorized} from '../../modules/Auth/selectors';

const PrivateRoute = ({component: Component, ...rest }) => {
    const isAuthorized = useSelector(getIsAuthorized);
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthorized ? <Component {...props} /> : <Redirect to={'/'} />
            }
        />
    );
};

export default PrivateRoute;