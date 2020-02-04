import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {postRegisterRequest} from '../../modules/Auth/authActions';
import Input from '../../elements/Input';
import Button from '../../elements/Button';

class Signup extends React.Component {
    state = {
        email: '',
        name: '',
        surname: '',
        password: ''
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const {postRegisterRequest} = this.props;
        postRegisterRequest(this.state);
    };
    handlerInputChange = ({ name, value }) => {
        this.setState({ [name]: value });
    };
    handleClick = (e) => {
        e.preventDefault();
        const { changeForm } = this.props;

        changeForm(true);
    };
    render() {
        const { isAuthorized } = this.props;
        return isAuthorized ? (
            <Redirect to="/map" />
        ) : (
            <form className="entryForm" onSubmit={this.handleSubmit}>
                <h1>Регистрация</h1>
                <p>
                    Уже зарегистрирован? <a href="/" onClick={this.handleClick}>Войти</a>
                </p>
                <div className="fieldset">
                    <Input
                        label="Адрес электронной почты"
                        type="text"
                        name="email"
                        changeHandler={this.handlerInputChange}
                    />
                    <Input
                        label="Имя"
                        type="text"
                        name="name"
                        class="half"
                        changeHandler={this.handlerInputChange}
                    />
                    <Input
                        label="Фамилия"
                        type="text"
                        name="surname"
                        class="half"
                        changeHandler={this.handlerInputChange}
                    />
                    <Input
                        label="Пароль"
                        type="password"
                        name="password"
                        changeHandler={this.handlerInputChange}
                    />
                </div>
                <Button text="Зарегистрироваться" />
            </form>
        );
    }
}

const mapStateToProps = (state) => state.loginReducer;

const mapDispatchToProps = {
    postRegisterRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
