import React from 'react';

class Signin extends React.Component {
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
                <h1>Войти</h1>
                <p>Новый пользователь? <a href="/">Зарегистрируйтесь</a></p>
                <div className="fieldset">
                    <div className="input">
                        <label>Имя пользователя*</label>
                        <input type="text" />
                    </div>
                    <div className="input">
                        <label>Пароль*</label>
                        <input type="password" />
                    </div>
                </div>
                <button className="button">Войти</button>
            </form>
        );
    }
}
export default Signin;