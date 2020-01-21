import React from 'react'
import Input from '../../elements/Input'
import Button from '../../elements/Button'

class Signup extends React.Component {
    state = {
        email: '',
        name: '',
        surname: '',
        password: ''
    }
    HandleSubmit = (e) => {
        e.preventDefault()
        this.props.handlerSubmit()
    }
    HandlerInputChange = ({ name, value }) => {
        this.setState({ [name]: value })
    }
    render() {
        return (
            <form className="entryForm" onSubmit={this.HandleSubmit}>
                <h1>Регистрация</h1>
                <p>
                    Уже зарегистрирован? <a href="/">Войти</a>
                </p>
                <div className="fieldset">
                    <Input
                        label="Адрес электронной почты"
                        type="text"
                        name="email"
                        changeHandler={this.HandlerInputChange}
                    />
                    <Input
                        label="Имя"
                        type="text"
                        name="name"
                        class="half"
                        changeHandler={this.HandlerInputChange}
                    />
                    <Input
                        label="Фамилия"
                        type="text"
                        name="surname"
                        class="half"
                        changeHandler={this.HandlerInputChange}
                    />
                    <Input
                        label="Пароль"
                        type="password"
                        name="password"
                        changeHandler={this.HandlerInputChange}
                    />
                </div>
                <Button text="Зарегистрироваться" />
            </form>
        )
    }
}

export default Signup
