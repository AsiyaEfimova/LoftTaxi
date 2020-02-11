import React from 'react';
import {connect, useSelector } from 'react-redux';
import {fetchAddressesRequest, fetchAddressesSuccess, fetchAddressesFailure} from '../../modules/Addresses/addressActions';
import Header from '../Header';
import OrderForm from '../OrderForm';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiZWZpbW92YWFzaXlhIiwiYSI6ImNrNXJ3azVmaTBna3ozZW1sZ3lmNTJnMTgifQ.K6Q-q93TYcDSl9R1KSHWRA';

class Map extends React.Component {
    map = null;
    mapContainer = React.createRef();
    componentDidMount() {
        // console.log(this.props.addresses);
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v9',
            zoom: 10,
            center: [37.622504,55.753215]
        });
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props.addresses);
    }

    componentWillUnmount() {
        this.map.remove();
    }
    HandlerInputChange = () => {
        console.log(1);
    };
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
    addresses: state.addressesReducer.addresses
});

const mapDispatchToProps = {
    fetchAddressesRequest,
    fetchAddressesSuccess,
    fetchAddressesFailure
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);