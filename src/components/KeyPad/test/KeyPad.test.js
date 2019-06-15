import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import KeyPad from '../KeyPad';
import NumberKeyPad from '../../NumberKeyPad/NumberKeyPad';
import ActionKeyPad from '../../ActionKeyPad/ActionKeyPad';

describe('<Display />', () => {
  const props = {
    enterKeyPress: sinon.spy(),
    cancelKeyPress: sinon.spy(),
    clearKeyPress: sinon.spy(),
    numberKeyPress: sinon.spy()
  };

  it('renders <KeyPad />', () => {
    const wrapper = shallow(
      <KeyPad {...props} />
    );
    expect(wrapper).to.have.lengthOf(1);
  });

  it('renders <KeyPad /> children', () => {
    const wrapper = shallow(
      <KeyPad {...props} />
    );
    const number = wrapper.find(NumberKeyPad);
    const action = wrapper.find(ActionKeyPad);
    expect(number).to.have.lengthOf(1);
    expect(action).to.have.lengthOf(1);
  });
})
