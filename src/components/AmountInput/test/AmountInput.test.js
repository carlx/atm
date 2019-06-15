import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import AmountInput from '../AmountInput';

describe('<AmountInput />', () => {
  const props = {
    amount: 12,
  };

  it('renders <AmountInput />', () => {
    const wrapper = shallow(
      <AmountInput {...props} />,
    );
    expect(wrapper).to.have.lengthOf(1);
  });

  it('renders <AmountInput /> amount', () => {
    const wrapper = shallow(
      <AmountInput {...props} />,
    );
    const input = wrapper.find('.amount-input');
    expect(input.text()).to.contains('12');
  });
})
