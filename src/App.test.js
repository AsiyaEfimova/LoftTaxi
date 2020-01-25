import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from '@testing-library/react';
import App from './App';
import {shallow} from 'enzyme';
import Router from "./components/Router";

describe('Тестировнаие компонента App', () => {
    // it('Компонет App содержит компонент Router', () => {
    //     const wrapper = shallow(<App/>);
    //     expect(wrapper.contains(<Router/>)).toEqual(true);
    // });
    it('Компонет App рендерится', () => {
        const wrapper = shallow(<App/>);
        expect(true).toEqual(true);
    });
});
