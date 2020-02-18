import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {postRegisterRequest, clearError} from '../../modules/Auth/actions';
import {getIsAuthorized, getIsLoading, getError} from '../../modules/Auth/selectors';
import { useForm } from 'react-hook-form';
import Input from '../../elements/Input';
import Button from '../../elements/Button';
import ErrorMessage from "../../elements/ErrorMessage";
import Loader from "../../elements/Loader";

const Signup = ()=> {
    const [user, setUser] = useState({
        email: '',
        name: '',
        surname: '',
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
        dispatch(postRegisterRequest(user));
    };
    const handlerInputChange = ({ name, value }) => {
        setUser({...user, [name]: value});
    };

    return isAuthorized ? (
        <Redirect to="/map" />
    ) : (
        <form className="entryForm" onSubmit={handleSubmit}>
            <h1>Регистрация</h1>
            <p>
                Уже зарегистрирован? <Link to="/signin">Войти</Link>
            </p>
            <div className="fieldset">
                <Input
                    label="Адрес электронной почты"
                    type="text"
                    name="email"
                    changeHandler={handlerInputChange}
                />
                <Input
                    label="Имя"
                    type="text"
                    name="name"
                    class="half"
                    changeHandler={handlerInputChange}
                />
                <Input
                    label="Фамилия"
                    type="text"
                    name="surname"
                    class="half"
                    changeHandler={handlerInputChange}
                />
                <Input
                    label="Пароль"
                    type="password"
                    name="password"
                    changeHandler={handlerInputChange}
                />
            </div>
            <Loader isLoading={isLoading}/>
            <ErrorMessage error={error}/>
            <Button text="Зарегистрироваться" />
        </form>
    );
};

export default Signup;
