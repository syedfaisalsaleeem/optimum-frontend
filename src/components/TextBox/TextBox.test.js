import React from 'react';
import { shallow } from 'enzyme';
import TextBox from './TextBox.js';

describe("TextBox",()=>{
    it("text box should render correctly",() => {
        const text_box = shallow(<TextBox/>);
        expect(
            text_box.contains(
              <ul></ul>
            )
          ).toBe(true);


    });
    
});
