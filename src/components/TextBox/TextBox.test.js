import React from 'react';
import { mount } from 'enzyme';
import TextBox from './TextBox.js';

describe("TextBox",()=>{
    it("should render correctly",() => {
        const component = mount(<TextBox/>);
    });
});
