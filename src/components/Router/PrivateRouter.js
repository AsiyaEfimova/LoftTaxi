import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({privateState, component: Component, ...rest }) => {
    let isAuthorized = privateState.loginReducer.isAuthorized;
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
    privateState: state
});

export default connect(mapStateToProps)(PrivateRoute);