import React from 'react';
import { shallow } from 'enzyme';
import ButtonComponent from './ButtonComponent.js';

describe("Button Component",()=>{
    it("render button component",() => {
        const button_component = shallow(<ButtonComponent/>);
        expect(
            button_component.containsMatchingElement(
              <button>Add item</button>
            )
          ).toBe(true);
    });
    
});
