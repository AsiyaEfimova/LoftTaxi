import React from 'react';
import ReactDOM from 'react-dom';
import {shallow,mount} from 'enzyme';
import Router from "./Router";

describe('Тестировнаие компонента Router', () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Router route={"auth"} pageSwitcher={()=>{}} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});