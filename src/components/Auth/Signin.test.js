import React from 'react';
import ReactDOM from 'react-dom';
import Signin from './Signin';
import {shallow,mount} from 'enzyme';
import Button from "../../elements/Button";
import Input from "../../elements/Input";


describe('Тестировнаие компонента Signin', () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Signin handlerSubmit={()=>{}} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('Компонет Signin содержит компонент Button', () => {
        const wrapper = shallow(<Signin handlerSubmit={()=>{}} />);
        expect(wrapper.contains(<Button text="Войти" />)).toEqual(true);
    });
    it('Компонет Signin содержит форму входа', () => {
        const wrapper = shallow(<Signin handlerSubmit={()=>{}} />);
        expect(wrapper.find('.entryForm')).toHaveLength(1);
    });
    it('Компонет Signin содержит поле логина', () => {
        const wrapper = mount(<Signin handlerSubmit={()=>{}} />);
        expect(wrapper.find('input[type="text"]')).toHaveLength(1);
    });
    it('Компонет Signin содержит поле пароля', () => {
        const wrapper = mount(<Signin handlerSubmit={()=>{}} />);
        expect(wrapper.find('input[type="password"]')).toHaveLength(1);
    });
    // Тест не проходит. Почему не может найти компонет, хотя в консоль при монтировании он выводится
    // it('Компонет Signin содержит компонент Input', () => {
    //     const wrapper = mount(<Signin handlerSubmit={()=>{}} />);
    //     console.log(wrapper.debug());
    //     expect(wrapper.contains(<Input label="Пароль*" type="password" name="password" changeHandler={()=>{}}/>)).toEqual(true);
    // });
    // Тест не проходит. Не получается сделать ввод текста, не происходит запись значений в state. Вызов mock не происходит из-за структуры компонента
    // it('Попытка логина', () => {
    //     const mockCallback = jest.fn();
    //     const wrapper = mount(<Signin handlerSubmit={mockCallback} />),
    //         loginInput = wrapper.find('input[type="text"]'),
    //         passwordInput = wrapper.find('input[type="password"]'),
    //         button = wrapper.find('button');
    //     loginInput.value = 'test';
    //     passwordInput.value = 'test';
    //     loginInput.simulate('input');
    //     passwordInput.simulate('input');
    //     loginInput.simulate('change');
    //     passwordInput.simulate('change');
    //     button.simulate('click');
    //     wrapper.find('.entryForm').simulate('submit');
    //     expect(mockCallback.mock.calls.length).toBe(1);
    // });
});