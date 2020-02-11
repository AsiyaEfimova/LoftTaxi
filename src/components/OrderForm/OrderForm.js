import React from 'react';
import {connect } from 'react-redux';
import {fetchAddressesRequest, fetchAddressesSuccess, fetchAddressesFailure} from '../../modules/Addresses/addressActions';
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
        // const {postCardRequest} = this.props;
        // postCardRequest(this.state);
    };
    handlerInputChange = ({ name, value }) => {
        this.setState({ [name]: value });
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
    fetchAddressesSuccess,
    fetchAddressesFailure
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);