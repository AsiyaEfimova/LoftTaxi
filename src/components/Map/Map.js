import React from 'react';
import {connect } from 'react-redux';
import {fetchAddressesRequest} from '../../modules/Addresses/addressActions';
import {fetchRouteRequest} from '../../modules/Routes';
import {drawRoute} from './DrawRoute'
import Header from '../Header';
import OrderForm from '../OrderForm';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiZWZpbW92YWFzaXlhIiwiYSI6ImNrNXJ3azVmaTBna3ozZW1sZ3lmNTJnMTgifQ.K6Q-q93TYcDSl9R1KSHWRA';

class Map extends React.Component {
    map = null;
    mapContainer = React.createRef();
    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v9',
            zoom: 8,
            center: [30.27,60]
        });
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props.addresses);
        if (this.map.getLayer('route')) {
            this.map.removeLayer('route');
            this.map.removeSource('route');
        }
        drawRoute(this.map, this.props.coords);
    }

    componentWillUnmount() {
        this.map.remove();
    }
    render() {
        return (
            <>
                <Header />
                <div id="page">
                    <div id="mapBox" ref={this.mapContainer}></div>
                    <div className="widthFix">
                        <OrderForm />
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    addresses: state.addressesReducer.addresses,
    coords: state.routeReducer.coords
});

const mapDispatchToProps = {
    fetchAddressesRequest,
    fetchRouteRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);