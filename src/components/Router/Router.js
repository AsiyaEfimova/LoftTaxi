import React from 'react';
import Profile from '../Profile';
import Map from '../Map';
import Auth from '../Auth';
import PropTypes from "prop-types";

class Router extends React.Component {
    render() {
        switch (this.props.route) {
            case 'profile':
                return <Profile routeHandler={this.props.pageSwitcher} />;
            case 'map':
                return <Map routeHandler={this.props.pageSwitcher} />;
            case 'auth':
                return <Auth routeHandler={this.props.pageSwitcher} />;
            default:
                return <div>Страница не найдена</div>;
        }
    }
}
Router.propTypes = {
    pageSwitcher: PropTypes.func.isRequired,
    route: PropTypes.string.isRequired
};
export default Router;
