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

    const handleOnSubmit = (data) => {
        dispatch(postLoginRequest(data));
    };

    const handlerInputChange = ({ name, value }) => {
        setUser({...user, [name]: value});
    };

    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur"
    });

    return isAuthorized ? (
        <Redirect to="/map" />
    ) : (
        <form className="entryForm" onSubmit={handleSubmit(handleOnSubmit)}>
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
                    ref={register({
                        // pattern: {
                        //     value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        //     message: "Invalid"
                        // },
                        required: 'Enter email'
                    })}
                    errors={errors}
                    changeHandler={handlerInputChange}
                />
                <Input
                    label="Пароль*"
                    type="password"
                    name="password"
                    ref={register({
                        required: "This is required",
                        minLength: {
                            value: 1,
                            message: "Min length is 1"
                        }
                    })}
                    errors={errors}
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
