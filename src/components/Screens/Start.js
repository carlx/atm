import React from 'react';
import PropTypes from 'prop-types';
import KeyPadButton from '../KeyPadButton/KeyPadButton';

const Start = props => (
  <div className="screen">
    <KeyPadButton color="digital" label="Deposit" onKeyPress={props.depositRequest} />
    <KeyPadButton color="digital" label="Withdraw" onKeyPress={props.withdrawRequest} />
  </div>
);

Start.propTypes = {
  depositRequest: PropTypes.func.isRequired,
  withdrawRequest: PropTypes.func.isRequired,
};

export default Start;
