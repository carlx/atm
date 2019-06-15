import React from 'react';
import AmountInput from '../AmountInput/AmountInput';
import PropTypes from 'prop-types';

const Withdraw = (props) => {
  return (
    <div className='screen'>
      <div className='row'>
        <div className='col-sm action-label'>
            Withdraw
        </div>
      </div>
      <AmountInput amount={props.amount} />
    </div>
  );
};

Withdraw.propTypes = {
  amount: PropTypes.number
};

export default Withdraw;
