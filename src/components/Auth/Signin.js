import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { postLoginRequest, clearError } from '../../modules/Auth/actions';
import { useForm } from 'react-hook-form';
import {getIsAuthorized, getIsLoading, getError} from '../../modules/Auth/selectors';
import Input from '../../elements/Input';
import Button from '../../elements/Button';
import ErrorMessage from '../../elements/ErrorMessage';
import Loader from '../../elements/Loader';

const Signin = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const dispatch = useDispatch(),
        isAuthorized = useSelector(getIsAuthorized),
        isLoading = useSelector(getIsLoading),
        error = useSelector(getError);

    useEffect(()=>{
        dispatch(clearError());
    },[dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postLoginRequest(user));
    };

    const handlerInputChange = ({ name, value }) => {
        setUser({...user, [name]: value});
    };

    return isAuthorized ? (
        <Redirect to="/map" />
    ) : (
        <form className="entryForm" onSubmit={handleSubmit}>
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
                    changeHandler={handlerInputChange}
                />
                <Input
                    label="Пароль*"
                    type="password"
                    name="password"
                    changeHandler={handlerInputChange}
                />
            </div>
            <Loader isLoading={isLoading}/>
            <ErrorMessage error={error}/>
            <Button text="Войти" />
        </form>
    );
};
export default Signin;
