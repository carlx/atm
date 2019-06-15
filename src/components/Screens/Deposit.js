import React from 'react';
import AmountInput from '../AmountInput/AmountInput';
import PropTypes from 'prop-types';

const Deposit = (props) => {
  return (
    <div className='screen'>
      <div className='row'>
        <div className='col-sm action-label'>
                    Deposit
        </div>
      </div>
      <AmountInput amount={props.amount} />
    </div>
  );
};

Deposit.propTypes = {
  amount: PropTypes.number
};

export default Deposit;
