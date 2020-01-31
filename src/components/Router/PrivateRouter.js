import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ isAuthorized, component: Component, ...rest }) => {
    console.log('PrivateRoute ==>', isAuthorized);

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthorized ? <Component {...props} /> : <Redirect to={'/'} />
            }
        />
    );
};

export default connect((state) => ({
    isAuthorized: state.isAuthorized
}))(PrivateRoute);