import React from 'react';
import Input from '../../elements/Input';
import Button from '../../elements/Button';
import PropTypes from "prop-types";

class Signup extends React.Component {
    state = {
        email: '',
        name: '',
        surname: '',
        password: ''
    };
    SubmitFunc = this.props.handlerSubmit;
    HandleSubmit = (e) => {
        e.preventDefault();
        this.SubmitFunc();
    };
    HandlerInputChange = ({ name, value }) => {
        this.setState({ [name]: value });
    };
    render() {
        return (
            <form className="entryForm" onSubmit={this.HandleSubmit}>
                <h1>Регистрация</h1>
                <p>
                    Уже зарегистрирован? <a href="/">Войти</a>
                </p>
                <div className="fieldset">
                    <Input
                        label="Адрес электронной почты"
                        type="text"
                        name="email"
                        changeHandler={this.HandlerInputChange}
                    />
                    <Input
                        label="Имя"
                        type="text"
                        name="name"
                        class="half"
                        changeHandler={this.HandlerInputChange}
                    />
                    <Input
                        label="Фамилия"
                        type="text"
                        name="surname"
                        class="half"
                        changeHandler={this.HandlerInputChange}
                    />
                    <Input
                        label="Пароль"
                        type="password"
                        name="password"
                        changeHandler={this.HandlerInputChange}
                    />
                </div>
                <Button text="Зарегистрироваться" />
            </form>
        );
    }
}
Signup.propTypes = {
    handlerSubmit: PropTypes.func.isRequired
};
export default Signup;
