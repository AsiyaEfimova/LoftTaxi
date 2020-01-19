import React from 'react';
import Profile from "../Profile";
import Map from "../Map";
import Auth from "../Auth";

class Router extends React.Component {
    constructor(props) {
        super(props);
        this.pageSwitcher = props.pageSwitcher;
    }
    render() {
        switch (this.props.route) {
            case "profile":
                return <Profile routeHandler={this.pageSwitcher} />;
            case "map":
                return <Map routeHandler={this.pageSwitcher} />;
            case "auth":
                return <Auth routeHandler={this.pageSwitcher} />;
            default:
                return <div>Страница не найдена</div>
        }
    }
}
export default Router;