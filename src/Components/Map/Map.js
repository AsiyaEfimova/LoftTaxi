import React from 'react';
import Header from '../Header'

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.routeHandler = props.routeHandler;
    }
    render() {
        return (
            <>
                <Header routeHandler={this.routeHandler} />
                <div id="page">
                    <h1>Map</h1>
                </div>
            </>
        );
    }
}
export default Map;