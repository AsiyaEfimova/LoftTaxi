import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.submitHandler = props.submit;
    }
    HandleSubmit = (e) => {
        e.preventDefault();
        this.submitHandler();
    };
    render() {
        return (
            <form className="entryForm" onSubmit={this.HandleSubmit}>
                <h1>Регистрация</h1>
                <p>Уже зарегистрирован? <a href="/">Войти</a></p>
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
        );
    }
}
export default Signup;