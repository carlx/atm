import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Deposit from '../Deposit';
import Error from '../Error';
import Withdraw from '../Withdraw';
import Start from '../Start';

describe('<Deposit />', () => {
  it('renders <Deposit />', () => {
    const wrapper = shallow(
      <Deposit />,
    );
    expect(wrapper).to.have.lengthOf(1);
  });
})

describe('<Withdraw />', () => {
  it('renders <Withdraw />', () => {
    const wrapper = shallow(
      <Withdraw />,
    );
    expect(wrapper).to.have.lengthOf(1);
  });
})

describe('<Error />', () => {
  it('renders <Error />', () => {
    const wrapper = shallow(
      <Error errorMessage="Error" />,
    );
    expect(wrapper).to.have.lengthOf(1);
  });
})

describe('<Start />', () => {
  it('renders <Start />', () => {
    const props = {
      depositRequest: sinon.spy(),
      withdrawRequest: sinon.spy(),
      onKeyPress: sinon.spy(),
    };
    const wrapper = shallow(
      <Start {...props} />,
    );
    expect(wrapper).to.have.lengthOf(1);
  });
})
