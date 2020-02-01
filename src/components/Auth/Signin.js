import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getLoginRequest } from '../../modules/Auth/authActions';
import Input from '../../elements/Input';
import Button from '../../elements/Button';

class Signin extends React.Component {
    state = {
        email: '',
        password: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {getLoginRequest} = this.props;
        getLoginRequest(this.state);
    };

    handlerInputChange = ({ name, value }) => {
        this.setState({ [name]: value });
    };

    handleClick = (e) => {
        e.preventDefault();
        const { changeForm } = this.props;

        changeForm(false);
    };

    render() {
        const { isAuthorized } = this.props;

        return isAuthorized ? (
            <Redirect to="/map" />
        ) : (
            <form className="entryForm" onSubmit={this.handleSubmit}>
                <h1>Войти</h1>
                <p>
                    Новый пользователь?{' '}
                    <a href="/" onClick={this.handleClick}>
                        Зарегистрируйтесь
                    </a>
                </p>
                <div className="fieldset">
                    <Input
                        label="Имя пользователя*"
                        type="text"
                        name="email"
                        changeHandler={this.handlerInputChange}
                    />
                    <Input
                        label="Пароль*"
                        type="password"
                        name="password"
                        changeHandler={this.handlerInputChange}
                    />
                </div>
                <Button text="Войти" />
            </form>
        );
    }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
    getLoginRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
