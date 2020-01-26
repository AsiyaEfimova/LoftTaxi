import React from 'react';
import ReactDOM from 'react-dom';
import {shallow,mount} from 'enzyme';
import Header from "./Header";

describe('Тестировнаие компонента Header', () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Header routeHandler={()=>{}} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('Клик по ссылкам', () => {
        const mockCallback = jest.fn();
        const wrapper = mount(<Header routeHandler={mockCallback} />),
            links = wrapper.find('.navLink');
        links.forEach((link)=>{
            link.simulate('click');
        });
        expect(mockCallback.mock.calls.length).toBe(links.length);
    });
});