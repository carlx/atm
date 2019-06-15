import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import KeyPadButton from '../KeyPadButton/KeyPadButton';
import {
  FUNCTION_KEY_CANCEL,
  FUNCTION_KEY_CLEAR,
  FUNCTION_KEY_ENTER,
  KEYPAD_FUNCTION_KEYS,
} from './constants';

class ActionKeyPad extends PureComponent {
  componentDidMount() {
    document.addEventListener('keydown', this.keyDownHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDownHandler);
  }

  getFnByKeyType(type) {
    switch (type) {
      case FUNCTION_KEY_CANCEL:
        return this.props.cancelKeyPress;
      case FUNCTION_KEY_CLEAR:
        return this.props.clearKeyPress;
      case FUNCTION_KEY_ENTER:
        return this.props.enterKeyPress;
      default:
        return () => null
    }
  }

    keyDownHandler = (event) => {
      const found = KEYPAD_FUNCTION_KEYS.find(item => item.keyCode === event.keyCode);
      if (found) {
        this.getFnByKeyType(found.type)();
      }
    };

    render() {
      return (
        <div className="d-flex flex-column keypad-function-keys">
          {
            KEYPAD_FUNCTION_KEYS.map(item => (
              <KeyPadButton
                key={item.id}
                color={item.color}
                label={item.label}
                disabled={this.props.disabled}
                onKeyPress={this.getFnByKeyType(item.type)}
              />
            ))
          }
        </div>
      );
    }
}

ActionKeyPad.propTypes = {
  enterKeyPress: PropTypes.func.isRequired,
  cancelKeyPress: PropTypes.func.isRequired,
  clearKeyPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default ActionKeyPad;
