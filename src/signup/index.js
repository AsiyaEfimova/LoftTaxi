import React from 'react';
import logo from '../img/logo-white.png';

export class Signup extends React.Component {
    render() {
        return (
            <div id="entryPage">
                <div className="widthFix">
                    <div className="content">
                        <div className="logoBox">
                        <img src={logo} className="logo" alt="logo"/>
                    </div>
                        <div className="formBox">
                            <form className="entryForm">
                                <h1>Регистрация</h1>
                                <p>Уже зарегистрирован? <a href="#">Войти</a></p>
                                <div className="fieldset">
                                    <div className="input">
                                        <label>Адрес электронной почты</label>
                                        <input type="text" />
                                    </div>
                                    <div className="input half">
                                        <label>Имя</label>
                                        <input type="text" />
                                    </div>
                                    <div className="input half">
                                        <label>Фамилия</label>
                                        <input type="text" />
                                    </div>
                                    <div className="input">
                                        <label>Пароль</label>
                                        <input type="password" />
                                    </div>
                                </div>
                                <button className="button">Зарегистрироваться</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// export default Signup;