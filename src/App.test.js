import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import {shallow, mount} from 'enzyme';
import Router from "./components/Router";
import Auth from "./components/Auth";

describe('Тестировнаие компонента App', () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    // it('Компонет App содержит компонент Router', () => {
    //     const wrapper = mount(<App/>);
    //     console.log(wrapper.debug());
    //     expect(wrapper.contains(<Router route="auth" pageSwitcher={()=>{}}/>)).toEqual(true);
    // });
    // it('Компонет App рендерится', () => {
    //     const wrapper = shallow(<App/>);
    //     expect(true).toEqual(true);
    // });
});
