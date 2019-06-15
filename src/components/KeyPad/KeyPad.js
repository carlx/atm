import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import NumberKeyPad from '../NumberKeyPad/NumberKeyPad';
import ActionKeyPad from '../ActionKeyPad/ActionKeyPad';

const KeyPad = props => (
  <div className="card">
    <div className="card-body">
      <div className="d-flex flex-row justify-content-center align-items-baseline">
        <NumberKeyPad numberKeyPress={props.numberKeyPress} />
        <ActionKeyPad
          enterKeyPress={props.enterKeyPress}
          cancelKeyPress={props.cancelKeyPress}
          clearKeyPress={props.clearKeyPress}
          disabled={props.disabled}
        />
      </div>
    </div>
  </div>
);

KeyPad.propTypes = {
  enterKeyPress: PropTypes.func.isRequired,
  cancelKeyPress: PropTypes.func.isRequired,
  clearKeyPress: PropTypes.func.isRequired,
  numberKeyPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default KeyPad;
