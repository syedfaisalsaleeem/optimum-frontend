import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import MessageBox from './MessageBox.js';

describe("MessageBox1", () => {
    let message_box1 = ShallowWrapper;
    beforeEach(() => {
        message_box1 = shallow(<MessageBox />);
    });
    it('able to find an html element', () => {
        expect(message_box1.find('div').exists());
        expect(message_box1.find('p').exists());
    });

});