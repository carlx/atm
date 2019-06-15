import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Atm } from '../Atm';
import { ATM_STATE_START } from '../../../domain/atm/state/constants';

describe('<Atm />', () => {
  it('renders <Atm />', () => {
    const props = {
      depositRequest: sinon.spy(),
      numberKeyPress: sinon.spy(),
      clearKeyPress: sinon.spy(),
      enterKeyPress: sinon.spy(),
      withdrawRequest: sinon.spy(),
      cancelKeyPress: sinon.spy(),
      accountBalance: 0,
      keyPadInput: 0,
      atmInternalState: ATM_STATE_START,
    };
    const wrapper = shallow(
      <Atm {...props} />,
    );
    expect(wrapper).to.have.lengthOf(1);
  });
})
