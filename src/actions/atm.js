export const WITHDRAW = 'atm/WITHDRAW';
export const DEPOSIT = 'atm/DEPOSIT';
export const NUMBER_KEY_PRESS = 'atm/keypad/NUMBER_KEY_PRESS';
export const ENTER_KEY_PRESS = 'atm/keypad/ENTER_KEY_PRESS';
export const CLEAR_KEY_PRESS = 'atm/keypad/CLEAR_KEY_PRESS';
export const CANCEL_KEY_PRESS = 'atm/keypad/CANCEL_KEY_PRESS';

export function numberKeyPress (value) {
  return {
    type: NUMBER_KEY_PRESS,
    value
  };
}

export function enterKeyPress () {
  return {
    type: ENTER_KEY_PRESS
  };
}

export function clearKeyPress () {
  return {
    type: CLEAR_KEY_PRESS
  };
}

export function cancelKeyPress () {
  return {
    type: CANCEL_KEY_PRESS
  };
}

export function withdraw () {
  return {
    type: WITHDRAW
  };
}

export function deposit () {
  return {
    type: DEPOSIT
  };
}
