import React from 'react';
import { shallow } from 'enzyme';
import InputBox from './InputBox.js';

describe("InputBox",()=>{
    it("render input box",() => {
        const inputbox = shallow(<InputBox/>);
        const findinput = inputbox.find('input');
        console.log(findinput.props)
        findinput.props().onChange();
        //   expect(component.state('input')).toEqual('myValue');
        // expect(inputbox.getElements()).toMatchSnapshot();
    });
});
