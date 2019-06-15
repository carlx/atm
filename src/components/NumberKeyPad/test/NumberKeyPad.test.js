import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import NumberKeyPad from '../NumberKeyPad';
import KeyPadButton from '../../KeyPadButton/KeyPadButton';

describe('<NumberKeyPad />', () => {
  const props = {
    numberKeyPress: () => sinon.spy(),
    disabled: false
  };
  const wrapper = shallow(
    <NumberKeyPad {...props} />
  );

  it('renders <NumberKeyPad />', () => {
    expect(wrapper).to.have.lengthOf(1);
  });

  it('renders <NumberKeyPad /> children', () => {
    expect(wrapper.find(KeyPadButton)).to.have.lengthOf(12);
  });
})
