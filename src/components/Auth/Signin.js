import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../modules/Auth/authActions';
import { Redirect } from 'react-router-dom';
import Input from '../../elements/Input';
import Button from '../../elements/Button';

class Signin extends React.Component {
    state = {
        name: '',
        password: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.login();
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
                        name="name"
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

const mapStateToProps = (state) => ({
    isAuthorized: state.isAuthorized
});

const mapDispatchToProps = {
    login
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
