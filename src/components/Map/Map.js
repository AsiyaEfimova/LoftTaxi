import React from 'react';
import Header from '../Header';
import Input from '../../elements/Input';
import Button from '../../elements/Button';

class Map extends React.Component {
    render() {
        return (
            <>
                <Header routeHandler={this.props.routeHandler} />
                <div id="page">
                    <div id="mapBox"></div>
                    <div className="widthFix">
                        <form className="routeForm">
                            <div className="routeLine"></div>
                            <Input
                                label="Откуда"
                                type="text"
                                name="from"
                                // changeHandler={this.HandlerInputChange}
                            />
                            <Input
                                label="Куда"
                                type="text"
                                name="to"
                                // changeHandler={this.HandlerInputChange}
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
