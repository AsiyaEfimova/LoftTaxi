import React from 'react';
import {connect} from "react-redux";
import {getCardRequest} from "../../modules/Profile/actions";
import PaymentForm from '../PaymentForm';
import Alert from '../../elements/Alert';
import './profile.scss';

class Profile extends React.Component {
    state = {
        token: '',
        hasCard: false
    };
    componentDidMount() {
        const {getCardRequest} = this.props;
        getCardRequest(this.props.token);
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props !== prevProps){
            this.setState(this.props);
        }
    }
    render() {
        const {hasCard} = this.state;
        return (
            <div id="page">
                <div className="widthFix">
                    <div className="profileBlock">
                        {hasCard ?
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
    hasCard: state.cardReducer.hasCard
});

const mapDispatchToProps = {
    getCardRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
