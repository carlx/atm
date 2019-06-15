import { createSelector } from 'reselect';

const selectAtm = (state) => state.atm;

export const makeSelectAtmInternalState = () => createSelector(
  selectAtm,
  (atm) => atm.machineState
);

export const makeSelectKeyPadInput = () => createSelector(
  selectAtm,
  (atm) => atm.keyPadInput
);

export const makeSelectAccountBalance = () => createSelector(
  selectAtm,
  (atm) => atm.accountBalance
);

export const makeSelectErrorMessage = () => createSelector(
  selectAtm,
  (atm) => atm.errorMessage
);
