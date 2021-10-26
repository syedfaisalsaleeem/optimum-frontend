import React from 'react';
import { shallow } from 'enzyme';
import ButtonComponent from './ButtonComponent.js';

describe("Button Component",()=>{
    it("render button component",() => {
        const component = shallow(<ButtonComponent/>);
    });
});
