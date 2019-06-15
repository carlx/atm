import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { KEYPAD_NUMBER_KEYS } from './constants';
import KeyPadButton from '../KeyPadButton/KeyPadButton';

class NumberKeyPad extends PureComponent {
  componentDidMount() {
    document.addEventListener('keydown', this.keyDownHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDownHandler);
  }

    keyDownHandler = (event) => {
      const found = KEYPAD_NUMBER_KEYS.find(item => item.keyCode === event.keyCode);
      if (found) {
        this.props.numberKeyPress(found.value)();
      }
    };

    chunk = (arr, size) => Array.from(
      { length: Math.ceil(arr.length / size) },
      (v, i) => arr.slice(i * size, i * size + size),
    );

    render() {
      return (
        <div className="keypad-keys pr-3">
          {
            this.chunk(KEYPAD_NUMBER_KEYS, 3).map((row, index) => (
              <div
                key={index}
                className="d-flex flex-row justify-content-around align-items-baseline"
              >
                {
                  row.map(btn => (
                    <KeyPadButton
                      key={btn.id}
                      label={btn.label}
                      color="silver"
                      disabled={this.props.disabled}
                      onKeyPress={this.props.numberKeyPress(btn.value)}
                    />
                  ))
                }
              </div>
            ))
          }
        </div>
      );
    }
}

NumberKeyPad.propTypes = {
  numberKeyPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default NumberKeyPad;
