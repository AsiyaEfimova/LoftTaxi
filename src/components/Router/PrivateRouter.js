import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({isAuthorized, component: Component, ...rest }) => {
    console.log(isAuthorized);
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthorized ? <Component {...props} /> : <Redirect to={'/'} />
            }
        />
    );
};

const mapStateToProps = (state) => ({
    isAuthorized: state.isAuthorized
});

export default connect(mapStateToProps)(PrivateRoute);