import React from 'react';
import {connect } from 'react-redux';
import {fetchAddressesRequest} from '../../modules/Addresses/actions';
import {fetchRouteRequest} from '../../modules/Routes';
import {drawRoute} from './DrawRoute'
import OrderForm from '../OrderForm';
import './map.scss';
import mapboxgl from 'mapbox-gl';
import Alert from "../../elements/Alert";
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
        const {hasCard} = this.props;
        return (
            <div id="page">
                <div id="mapBox" ref={this.mapContainer}></div>
                <div className="widthFix">
                    <div className="orderBlock">
                        {hasCard ?
                            <OrderForm /> :
                            <Alert header="Заказ такси" body="Информация об оплате не добавлена. Перейтиде в профиль." linkText="Перейти в профиль" linkTo="/profile" />
                         }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    addresses: state.addressesReducer.addresses,
    coords: state.routeReducer.coords,
    hasCard: state.cardReducer.hasCard
});

const mapDispatchToProps = {
    fetchAddressesRequest,
    fetchRouteRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);