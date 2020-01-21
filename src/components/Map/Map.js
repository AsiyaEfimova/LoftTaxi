import React from 'react';
import Header from '../Header'

class Map extends React.Component {
    render() {
        return (
            <>
                <Header routeHandler={this.props.routeHandler} />
                <div id="page">
                    <h1>Map</h1>
                </div>
            </>
        );
    }
}
export default Map;