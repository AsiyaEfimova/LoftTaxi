import React from 'react';
import Input from "../../Elements/Input";
import Button from "../../Elements/Button";

class Signin extends React.Component {
    state = {
        name: '',
        password: ''
    };
    HandleSubmit = (e) => {
        e.preventDefault();
        this.props.handlerSubmit();
    };
    HandlerInputChange = ({name,value}) => {
        this.setState({[name]: value});
    };
    render() {
        return (
            <form className="entryForm" onSubmit={this.HandleSubmit}>
                <h1>Войти</h1>
                <p>Новый пользователь? <a href="/">Зарегистрируйтесь</a></p>
                <div className="fieldset">
                    <Input label="Имя пользователя*" type="text" name="name" changeHandler={this.HandlerInputChange} />
                    <Input label="Пароль*" type="password" name="password" changeHandler={this.HandlerInputChange} />
                </div>
                <Button text="Войти" />
            </form>
        );
    }
}
export default Signin;