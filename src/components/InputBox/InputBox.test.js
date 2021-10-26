import React from 'react';
import { shallow } from 'enzyme';
import InputBox from './InputBox.js';

describe("InputBox",()=>{
    it("render input box",() => {
        const component = shallow(<InputBox/>);
    });
});
