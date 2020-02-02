import React from 'react';
import Header from '../Header';
import {connect} from "react-redux";
import {postCardRequest} from "../../modules/Profile/profileActions";
import Input from '../../elements/Input';
import Button from '../../elements/Button';

class Profile extends React.Component {
    state = {
        cardNumber: '',
        expiryDate: '',
        cardName: '',
        cvc: ''
    };
    componentDidMount() {
        const {getCardRequest} = this.props;
        getCardRequest();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {postCardRequest} = this.props;
        postCardRequest(this.state);
    };
    handlerInputChange = ({ name, value }) => {
        this.setState({ [name]: value });
    };
    render() {
        return (
            <>
                <Header />
                <div id="page">
                    <div className="widthFix">
                        <form className="paymentForm" onSubmit={this.handleSubmit}>
                            <h1>
                                Профиль
                                <small>Способ оплаты</small>
                            </h1>
                            <div className="fieldSet">
                                <fieldset className="card">
                                    <div className="cardIco"></div>
                                    <Input
                                        label="Номер карты:"
                                        type="text"
                                        name="cardNumber"
                                        changeHandler={this.handlerInputChange}
                                    />
                                    <Input
                                        label="Срок действия:"
                                        type="text"
                                        name="expiryDate"
                                        changeHandler={this.handlerInputChange}
                                    />
                                </fieldset>
                                <fieldset className="card">
                                    <Input
                                        label="Имя владельца:"
                                        type="text"
                                        name="cardName"
                                        changeHandler={this.handlerInputChange}
                                    />
                                    <Input
                                        label="CVC:"
                                        type="password"
                                        name="cvc"
                                        changeHandler={this.handlerInputChange}
                                    />
                                </fieldset>
                            </div>
                            <Button text="Сохранить" />
                            <div className="toolTip"></div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
    postCardRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
