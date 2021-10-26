import React from 'react';
import { shallow } from 'enzyme';
import TextBox from './TextBox.js';

describe("TextBox",()=>{
    it("should render correctly",() => {
        const component = shallow(<TextBox/>);
    });
});
