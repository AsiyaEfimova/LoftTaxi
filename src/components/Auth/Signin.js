import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { postLoginRequest, clearError } from '../../modules/Auth/actions';
import Input from '../../elements/Input';
import Button from '../../elements/Button';
import ErrorMessage from '../../elements/ErrorMessage';
import Loader from '../../elements/Loader';

class Signin extends React.Component {
    state = {
        email: '',
        password: ''
    };
    componentDidMount() {
        const { error } = this.props;
        if(error){
            const {clearError} = this.props;
            clearError();
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {postLoginRequest} = this.props;
        postLoginRequest(this.state);
    };

    handlerInputChange = ({ name, value }) => {
        this.setState({ [name]: value });
    };

    render() {
        const { isAuthorized, error, isLoading } = this.props;
        return isAuthorized ? (
            <Redirect to="/map" />
        ) : (
            <form className="entryForm" onSubmit={this.handleSubmit}>
                <h1>Войти</h1>
                <p>
                    Новый пользователь?{' '}
                    <Link to="/signup">Зарегистрируйтесь</Link>
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
                <Loader isLoading={isLoading}/>
                <ErrorMessage error={error}/>
                <Button text="Войти" />
            </form>
        );
    }
}

const mapStateToProps = (state) => state.loginReducer;

const mapDispatchToProps = {
    postLoginRequest,
    clearError
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
