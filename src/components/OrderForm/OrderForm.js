import React from 'react';
import {connect } from 'react-redux';
import {fetchAddressesRequest} from '../../modules/Addresses/addressActions';
import {fetchRouteRequest} from '../../modules/Routes';
import InputAutocomplete from '../../elements/InputAutocomplete';
import Button from '../../elements/Button';

class OrderForm extends React.Component {
    state = {
        addressFrom: '',
        addressTo: '',
        addressesList: []
    };
    componentDidMount() {
        const {fetchAddressesRequest} = this.props;
        fetchAddressesRequest();
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props !== prevProps){
            this.setState({addressesList: this.props.addressesList.addresses});
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {fetchRouteRequest} = this.props;
        fetchRouteRequest({addressFrom: this.state.addressFrom, addressTo: this.state.addressTo});
    };
    handlerInputChange = (inputData) => {
        console.log(inputData);
        this.setState(inputData);
    };
    render() {
        const {addressesList, addressFrom, addressTo} = this.state;
        console.log(this.state, addressesList);
        return (
            <>
                <form className="routeForm" onSubmit={this.handleSubmit}>
                    <div className="routeLine"></div>
                    <InputAutocomplete
                        label="Откуда"
                        type="text"
                        name={"addressFrom"}
                        value={addressFrom}
                        changeHandler={this.handlerInputChange}
                        itemList={addressesList}
                    />
                    <InputAutocomplete
                        label="Куда"
                        type="text"
                        name={"addressTo"}
                        value={addressTo}
                        changeHandler={this.handlerInputChange}
                        // itemList={loadAddressesList()}
                        itemList={addressesList}
                    />
                    <Button text="Вызвать такси"
                        // disabled={!addresses.addressFrom || !addresses.addressTo}
                        // onClick={}
                    />
                </form>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    addressesList: state.addressesReducer.addresses
});

const mapDispatchToProps = {
    fetchAddressesRequest,
    fetchRouteRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);