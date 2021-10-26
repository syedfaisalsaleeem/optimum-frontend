import React from 'react';
import { shallow } from 'enzyme';
import InputBox from './InputBox.js';

describe("InputBox",()=>{
    it("render input box",() => {
        const inputbox = shallow(<InputBox/>);
        expect(
            inputbox.containsMatchingElement(
              <input />
            )
          ).toBe(true);
    });
});
