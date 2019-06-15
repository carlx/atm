import {
  makeSelectAccountBalance,
  makeSelectAtmInternalState,
  makeSelectErrorMessage,
  makeSelectKeyPadInput
} from '../atm';
import { INITIAL_STATE } from '../../reducers/atm';
import { ATM_STATE_START } from '../../domain/atm/state/constants';
import { ATM_ERROR_FUNDS_MSG } from '../../domain/atm/messages/constants';

describe('Atm Selectors', () => {
  it('should select ATM_START', () => {
    const selector = makeSelectAtmInternalState();
    const mockState = {
      atm: INITIAL_STATE
    };
    expect(selector(mockState)).toEqual(ATM_STATE_START)
  });

  it('should select keyPadInput value', () => {
    const selector = makeSelectKeyPadInput();
    const keyPadInput = 12;
    const mockState = {
      atm: {
        ...INITIAL_STATE,
        keyPadInput
      }
    };
    expect(selector(mockState)).toEqual(keyPadInput)
  })

  it('should select account balance value', () => {
    const selector = makeSelectAccountBalance();
    const accountBalance = 12;
    const mockState = {
      atm: {
        ...INITIAL_STATE,
        accountBalance
      }
    };
    expect(selector(mockState)).toEqual(accountBalance)
  })

  it('should select error message', () => {
    const selector = makeSelectErrorMessage();
    const errorMessage = ATM_ERROR_FUNDS_MSG;
    const mockState = {
      atm: {
        ...INITIAL_STATE,
        errorMessage
      }
    };
    expect(selector(mockState)).toEqual(errorMessage)
  })
})
