import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss'

const KeyPadButton = (props) => {
  const btnClass = classNames({
    btn: true,
    'btn-atm': true,
    'btn-block': true,
    ['btn-' + props.color]: props.color
  });
  return (
    <button
      className={btnClass}
      onClick={props.onKeyPress}
      disabled={props.disabled || !props.label}
    >
      { (props.label) ? props.label.toUpperCase() : '\u00A0' }
    </button>
  );
};

KeyPadButton.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onKeyPress: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

export default KeyPadButton;
