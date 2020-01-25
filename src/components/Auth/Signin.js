import React from 'react';
import Input from '../../elements/Input';
import Button from '../../elements/Button';
import {Context} from '../../context';
import PropTypes from "prop-types";

class Signin extends React.Component {
    state = {
        name: '',
        password: ''
    };
    LoginFunc = this.context.login;
    SubmitFunc = this.props.handlerSubmit;
    HandleSubmit = (e) => {
        e.preventDefault();
        if(this.LoginFunc(this.state.name, this.state.password)){
            this.SubmitFunc();
        }
    };
    HandlerInputChange = ({ name, value }) => {
        this.setState({ [name]: value });
    };
    render() {
        return (
            <form className="entryForm" onSubmit={this.HandleSubmit}>
                <h1>Войти</h1>
                <p>
                    Новый пользователь? <a href="/">Зарегистрируйтесь</a>
                </p>
                <div className="fieldset">
                    <Input
                        label="Имя пользователя*"
                        type="text"
                        name="name"
                        changeHandler={this.HandlerInputChange}
                    />
                    <Input
                        label="Пароль*"
                        type="password"
                        name="password"
                        changeHandler={this.HandlerInputChange}
                    />
                </div>
                <Button text="Войти" />
            </form>
        );
    }
}
Signin.contextType = Context;
Signin.propTypes = {
    handlerSubmit: PropTypes.func.isRequired
};
export default Signin;
