import React from 'react';
import { mount } from 'enzyme';
import InputBox from './InputBox.js';

describe("InputBox",()=>{
    it("should render correctly",() => {
        const component = mount(<InputBox/>);
    });
});
