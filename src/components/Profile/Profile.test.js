import React from 'react';
import ReactDOM from 'react-dom';
import {shallow,mount} from 'enzyme';
import Profile from "./Profile";

describe('Тестировнаие компонента Profile', () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Profile routeHandler={()=>{}} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});