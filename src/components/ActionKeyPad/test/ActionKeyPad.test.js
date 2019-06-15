import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ActionKeyPad from '../ActionKeyPad';
import KeyPadButton from '../../KeyPadButton/KeyPadButton';

describe('<ActionKeyPad />', () => {
  const props = {
    enterKeyPress: sinon.spy(),
    cancelKeyPress: sinon.spy(),
    clearKeyPress: sinon.spy(),
  };
  it('renders <ActionKeyPad />', () => {
    const wrapper = shallow(
      <ActionKeyPad {...props} />,
    );
    expect(wrapper).to.have.lengthOf(1);
  });

  it('renders <ActionKeyPad /> children', () => {
    const wrapper = shallow(
      <ActionKeyPad {...props} />,
    );
    expect(wrapper.find(KeyPadButton)).to.have.lengthOf(4);
  });
})
