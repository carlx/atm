import React from 'react';
import PropTypes from 'prop-types';
import AmountInput from '../AmountInput/AmountInput';

const Withdraw = props => (
  <div className="screen">
    <div className="row">
      <div className="col-sm action-label">
            Withdraw
      </div>
    </div>
    <AmountInput amount={props.amount} />
  </div>
);

Withdraw.propTypes = {
  amount: PropTypes.number,
};

export default Withdraw;
