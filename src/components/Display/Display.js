import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Display = (props) => {
  return (
    <div className='card mb-3'>
      <div className='card-body'>
        <div className='balance-container'>
          <div className='balance'>account balance: { props.accountBalance}</div>
        </div>
        <div className='main-container'>
          {props.children}
        </div>
      </div>
    </div>
  );
};

Display.propTypes = {
  accountBalance: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
};

export default Display;
