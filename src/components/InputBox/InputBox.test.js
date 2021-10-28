import React from 'react';
import { shallow } from 'enzyme';
import InputBox from './InputBox.js';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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
