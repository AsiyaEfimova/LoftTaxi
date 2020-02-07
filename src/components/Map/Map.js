import React from 'react';
import Header from '../Header';
import InputAutocomplete from '../../elements/InputAutocomplete';
import Button from '../../elements/Button';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiZWZpbW92YWFzaXlhIiwiYSI6ImNrNXJ3azVmaTBna3ozZW1sZ3lmNTJnMTgifQ.K6Q-q93TYcDSl9R1KSHWRA';

class Map extends React.Component {
    map = null;
    mapContainer = React.createRef();
    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v9',
            zoom: 10,
            center: [37.622504,55.753215]
        });
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
                        <form className="routeForm">
                            <div className="routeLine"></div>
                            <InputAutocomplete
                                label="Откуда"
                                type="text"
                                name="from"
                                changeHandler={this.HandlerInputChange}
                            />
                            <InputAutocomplete
                                label="Куда"
                                type="text"
                                name="to"
                                changeHandler={this.HandlerInputChange}
                            />
                            <Button text="Вызвать такси" />
                        </form>
                    </div>
                </div>
            </>
        );
    }
}
export default Map;
