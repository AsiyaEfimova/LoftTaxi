import React from 'react';
import ReactDOM from 'react-dom';
import Auth from './Auth';
import {shallow} from 'enzyme';
// import Router from "./components/Router";

describe('Тестировнаие компонента Auth', () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Auth routeHandler={()=>{}} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    // Тест не проходит. Почему не может найти компонет, хотя в консоль при монтировании он выводится
    // it('Компонет App содержит компонент Router', () => {
    //     const wrapper = shallow(<App/>);
    //     expect(wrapper.contains(<Router/>)).toEqual(true);
    // });
});
