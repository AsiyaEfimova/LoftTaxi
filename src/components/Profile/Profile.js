import React from 'react';
import Header from '../Header';
import {connect} from "react-redux";
import {postCardRequest} from "../../modules/Profile/profileActions";
import {getCardRequest} from "../../modules/Profile/profileActions";
import Input from '../../elements/Input';
import Button from '../../elements/Button';

class Profile extends React.Component {
    state = {
        token: '',
        cardNumber: '',
        expiryDate: '',
        cardName: '',
        cvc: ''
    };
    componentDidMount() {
        this.setState({token: this.props.token});
        const {getCardRequest} = this.props;
        getCardRequest(this.props.token);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        let {cardInfo} = this.props;
        if(cardInfo!== prevProps.cardInfo){
            this.setState({
                cardNumber: cardInfo.cardNumber,
                expiryDate: cardInfo.expiryDate,
                cardName: cardInfo.cardName,
                cvc: cardInfo.cvc
            });
        }
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
        const {cardNumber, expiryDate, cardName, cvc} = this.state;
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
                                        value={cardNumber}
                                        changeHandler={this.handlerInputChange}
                                    />
                                    <Input
                                        label="Срок действия:"
                                        type="text"
                                        name="expiryDate"
                                        value={expiryDate}
                                        changeHandler={this.handlerInputChange}
                                    />
                                </fieldset>
                                <fieldset className="card">
                                    <Input
                                        label="Имя владельца:"
                                        type="text"
                                        name="cardName"
                                        value={cardName}
                                        changeHandler={this.handlerInputChange}
                                    />
                                    <Input
                                        label="CVC:"
                                        type="password"
                                        name="cvc"
                                        value={cvc}
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

const mapStateToProps = (state) => ({
    token: state.loginReducer.token,
    cardInfo: state.cardReducer
});

const mapDispatchToProps = {
    postCardRequest,
    getCardRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
