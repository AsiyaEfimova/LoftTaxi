import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import {getLoginRequest, getLoginSuccess, getLoginFailure, getLogOut} from '../../modules/Auth';

const PrivateRoute = ({isAuthorized, component: Component, ...rest }) => {
    // console.log(store);

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthorized ? <Component {...props} /> : <Redirect to={'/'} />
            }
        />
    );
};

// const mapStateToProps = state => ({
//     series: getSeriesImages(state),
//     isLoading: getIsLoading(state),
//     error: getError(state),
// });
// const mapDispatchToProps = { fetchSeriesRequest };
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(PrivateRoute);


const mapStateToProps = (state) => ({
    isAuthorized: state.isAuthorized
});

export default connect(mapStateToProps)(PrivateRoute);