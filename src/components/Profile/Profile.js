import React from 'react';
import {connect} from "react-redux";
import {getCardRequest, getCardSuccess} from "../../modules/Profile/actions";
import PaymentForm from '../PaymentForm';
import Alert from '../../elements/Alert';
import './profile.scss';

class Profile extends React.Component {
    state = {
        token: '',
        hasCard: false,
        addedCard: false
    };
    componentDidMount() {
        if(!this.props.hasCard) {
            const {getCardRequest} = this.props;
            getCardRequest(this.props.token);
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props !== prevProps){
            this.setState(this.props);
        }
    }
    render() {
        const {addedCard} = this.state;
        return (
            <div id="page">
                <div className="widthFix">
                    <div className="profileBlock">
                        {addedCard ?
                            <Alert header="Профиль" body="Информация об оплате добавлена. Можете перейти к заказу такси." linkText="Перейти на карту" linkTo="/map" /> : <PaymentForm />
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    token: state.loginReducer.token,
    hasCard: state.cardReducer.hasCard,
    addedCard: state.cardReducer.addedCard
});

const mapDispatchToProps = {
    getCardRequest,
    getCardSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
