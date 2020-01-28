import React from 'react';
import Header from '../Header';
import Input from '../../elements/Input';
import Button from '../../elements/Button';
import PropTypes from "prop-types";

class Profile extends React.Component {
    render() {
        return (
            <>
                <Header routeHandler={this.props.routeHandler} />
                <div id="page">
                    <div className="widthFix">
                        <form className="paymentForm">
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
                                    />
                                    <Input
                                        label="Срок действия:"
                                        type="text"
                                        name="cardValid"
                                    />
                                </fieldset>
                                <fieldset className="card">
                                    <Input
                                        label="Номер карты:"
                                        type="text"
                                        name="cardNumber"
                                    />
                                    <Input
                                        label="Срок действия:"
                                        type="text"
                                        name="cardValid"
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
// Profile.propTypes = {
//     routeHandler: PropTypes.func.isRequired
// };
export default Profile;
