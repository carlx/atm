import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

const AmountInput = props => (
  <div className="row">
    <div className="col-sm-10 text-left">
      <div className="input-container">
        <div className="amount-input">{props.amount || ''}</div>
        <div className="amount-cursor-container"><div className="amount-cursor" /></div>
      </div>
    </div>
  </div>
);

AmountInput.propTypes = {
  amount: PropTypes.number,
};

export default AmountInput;
