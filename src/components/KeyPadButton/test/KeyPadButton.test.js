import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import KeyPadButton from '../KeyPadButton';

describe('<KeyPadButton />', () => {
  it('renders <KeyPadButton />', () => {
    const props = {
      color: 'silver',
      onKeyPress: sinon.spy(),
    };
    const wrapper = shallow(<KeyPadButton {...props} />);
    const button = wrapper.find('button');
    expect(button).to.have.lengthOf(1);
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const props = {
      color: 'silver',
      onKeyPress: onButtonClick,
    };
    const wrapper = shallow(<KeyPadButton {...props} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });
})
