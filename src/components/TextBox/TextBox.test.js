import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TextBox from './TextBox.js';

describe("Find Text Box", () => {
  let text_box = ShallowWrapper;
  beforeEach(() => {
    text_box = shallow(<TextBox />);
  });
  it('able to find an html element', () => {
    expect(text_box.find('ul').exists());
    expect(text_box.find('li').exists());
  });

});



