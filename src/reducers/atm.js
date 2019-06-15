import {
  CANCEL_KEY_PRESS,
  CLEAR_KEY_PRESS,
  DEPOSIT, ENTER_KEY_PRESS,
  NUMBER_KEY_PRESS,
  WITHDRAW
} from '../actions/atm';
import {
  ATM_STATE_DEPOSIT,
  ATM_STATE_ERROR,
  ATM_STATE_START,
  ATM_STATE_WITHDRAW
} from '../domain/atm/state/constants';

const initialState = {
  keyPadInput: 0,
  accountBalance: 0,
  machineState: ATM_STATE_START,
  errorMessage: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NUMBER_KEY_PRESS:
      return {
        ...state,
        keyPadInput: Number(String(state.keyPadInput || '') + action.value)
      };
    case CLEAR_KEY_PRESS:
      return {
        ...state,
        keyPadInput: initialState.keyPadInput
      };
    case CANCEL_KEY_PRESS:
      return {
        ...state,
        machineState: ATM_STATE_START,
        keyPadInput: initialState.keyPadInput,
        errorMessage: initialState.errorMessage
      };
    case ENTER_KEY_PRESS: {
      switch (state.machineState) {
        case ATM_STATE_DEPOSIT:
          return {
            ...state,
            keyPadInput: initialState.keyPadInput,
            machineState: ATM_STATE_START,
            accountBalance: state.accountBalance + state.keyPadInput
          };
        case ATM_STATE_WITHDRAW: {
          const error = state.accountBalance < state.keyPadInput;
          return {
            ...state,
            accountBalance: error
              ? state.accountBalance
              : state.accountBalance - state.keyPadInput,
            machineState: error
              ? ATM_STATE_ERROR
              : ATM_STATE_START,
            errorMessage: error
              ? 'Not enough funds'
              : initialState.errorMessage
          }
        }
        default:
          return state;
      }
    }
    case WITHDRAW:
      return {
        ...state,
        keyPadInput: initialState.keyPadInput,
        machineState: ATM_STATE_WITHDRAW
      };
    case DEPOSIT:
      return {
        ...state,
        keyPadInput: initialState.keyPadInput,
        machineState: ATM_STATE_DEPOSIT
      };
    default:
      return state;
  }
};
