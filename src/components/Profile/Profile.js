import React from 'react';
import Header from '../Header';
import {connect} from "react-redux";
import {postCardRequest} from "../../modules/Profile/profileActions";
import {getCardRequest} from "../../modules/Profile/profileActions";
import Input from '../../elements/Input';
import Button from '../../elements/Button';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        let userInfo = this.props.loginReducer;
        this.state = {
            token: userInfo.token,
            cardNumber: '',
            expiryDate: '',
            cardName: '',
            cvc: ''
        };
        const {getCardRequest} = this.props;
        getCardRequest(this.state);
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
                                        value={this.props.cardReducer.cardNumber}
                                        changeHandler={this.handlerInputChange}
                                    />
                                    <Input
                                        label="Срок действия:"
                                        type="text"
                                        name="expiryDate"
                                        value={this.props.cardReducer.expiryDate}
                                        changeHandler={this.handlerInputChange}
                                    />
                                </fieldset>
                                <fieldset className="card">
                                    <Input
                                        label="Имя владельца:"
                                        type="text"
                                        name="cardName"
                                        value={this.props.cardReducer.cardName}
                                        changeHandler={this.handlerInputChange}
                                    />
                                    <Input
                                        label="CVC:"
                                        type="password"
                                        name="cvc"
                                        value={this.props.cardReducer.cvc}
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

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = {
    postCardRequest,
    getCardRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
