import React from 'react';
import {connect} from "react-redux";
import {postCardRequest, getCardRequest, postCardSuccess, getCardSuccess} from "../../modules/Profile/profileActions";
import PaymentForm from '../PaymentForm';
import Alert from '../../elements/Alert';

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
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     const {postCardRequest} = this.props;
    //     postCardRequest(this.state);
    // };
    // handlerInputChange = ({ name, value }) => {
    //     this.setState({ [name]: value });
    // };
    render() {
        const {hasCard} = this.state;
        console.log(this.state,hasCard);
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
    getCardRequest,
    postCardRequest,
    postCardSuccess,
    getCardSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
