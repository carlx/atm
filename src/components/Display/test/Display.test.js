import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Display from '../Display';
import Start from '../../Screens/Start';

describe('<Display />', () => {
  const props = {
    accountBalance: 12
  };

  const startProps = {
    depositRequest: sinon.spy(),
    withdrawRequest: sinon.spy()
  };

  it('renders <Display /> children', () => {
    const wrapper = shallow(
      <Display {...props} >
        <Start {...startProps} />
      </Display>
    );
    const start = wrapper.find(Start);
    expect(start).to.have.lengthOf(1);
  });

  it('<Display /> contains text', () => {
    const wrapper = shallow(
      <Display {...props} >
        <Start {...startProps} />
      </Display>
    );
    expect(wrapper.text()).to.contains('account balance');
  });
})
