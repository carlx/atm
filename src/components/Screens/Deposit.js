import React from 'react';
import PropTypes from 'prop-types';
import AmountInput from '../AmountInput/AmountInput';

const Deposit = props => (
  <div className="screen">
    <div className="row">
      <div className="col-sm action-label">
                    Deposit
      </div>
    </div>
    <AmountInput amount={props.amount} />
  </div>
);

Deposit.propTypes = {
  amount: PropTypes.number,
};

export default Deposit;
