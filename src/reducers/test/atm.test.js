import reducer, { INITIAL_STATE } from '../atm';
import {
  numberKeyPress,
  clearKeyPress,
  cancelKeyPress,
  enterKeyPress,
  withdraw,
  deposit
} from '../../actions/atm';
import {
  ATM_STATE_DEPOSIT,
  ATM_STATE_ERROR,
  ATM_STATE_WITHDRAW
} from '../../domain/atm/state/constants';
import { ATM_ERROR_FUNDS_MSG } from '../../domain/atm/message/constants';

describe('Atm reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle NUMBER_KEY_PRESS', () => {
    const value = 1;
    const expected = {
      ...INITIAL_STATE,
      keyPadInput: value
    }
    expect(reducer(undefined, numberKeyPress(value))).toEqual(expected);
  });

  it('should handle CLEAR_KEY_PRESS', () => {
    expect(reducer(undefined, clearKeyPress())).toEqual(INITIAL_STATE);
  });

  it('should handle CANCEL_KEY_PRESS', () => {
    const mockState = {
      ...INITIAL_STATE,
      machineState: ATM_STATE_WITHDRAW
    }
    expect(reducer(mockState, cancelKeyPress())).toEqual(INITIAL_STATE);
  });

  it('should handle ENTER_KEY_PRESS', () => {
    const mockState = {
      ...INITIAL_STATE,
      machineState: ATM_STATE_WITHDRAW,
      keyPadInput: 12
    };
    const expected = {
      ...INITIAL_STATE,
      machineState: ATM_STATE_ERROR,
      keyPadInput: 12,
      errorMessage: ATM_ERROR_FUNDS_MSG
    }
    expect(reducer(mockState, enterKeyPress())).toEqual(expected);
  });

  it('should handle WITHDRAW', () => {
    const expected = {
      ...INITIAL_STATE,
      machineState: ATM_STATE_WITHDRAW
    }
    expect(reducer(INITIAL_STATE, withdraw())).toEqual(expected);
  });

  it('should handle DEPOSIT', () => {
    const expected = {
      ...INITIAL_STATE,
      machineState: ATM_STATE_DEPOSIT
    }
    expect(reducer(INITIAL_STATE, deposit())).toEqual(expected);
  });
})
