import React from 'react';
import ReactDOM from 'react-dom';
import {shallow,mount} from 'enzyme';
import Input from "./Input";

describe('Тестировнаие компонента Input', () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Input label="Пароль*" type="password" name="password" changeHandler={()=>{}}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('Ввод текста', () => {
        const mockCallback = jest.fn();
        const wrapper = mount(<Input label="Имя" type="text" name="login" changeHandler={mockCallback}/>),
            input = wrapper.find('input');
        input.value = 'test';
        input.simulate('change');
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});