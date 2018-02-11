import React from 'react';
import { shallow } from 'enzyme';
import Hello from './Hello';

describe('Component Hello', function () {
  it('should hello my world', function () {
    const wrapper = shallow(<Hello msg="World" />);
    expect(wrapper.text()).to.equal('Hello World');
  });
});
