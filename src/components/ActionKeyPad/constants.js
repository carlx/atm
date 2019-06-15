export const FUNCTION_KEY_ENTER = 'FUNCTION_KEY_ENTER';
export const FUNCTION_KEY_CLEAR = 'FUNCTION_KEY_CLEAR';
export const FUNCTION_KEY_CANCEL = 'FUNCTION_KEY_CANCEL';
export const FUNCTION_KEY_PLACEHOLDER = 'FUNCTION_KEY_PLACEHOLDER';

export const KEYPAD_FUNCTION_KEYS = [
  {
    label: 'Cancel',
    color: 'danger',
    type: FUNCTION_KEY_CANCEL,
    keyCode: null
  },
  {
    label: 'Clear',
    color: 'warning',
    type: FUNCTION_KEY_CLEAR,
    keyCode: 8
  },
  {
    label: 'Enter',
    color: 'success',
    type: FUNCTION_KEY_ENTER,
    keyCode: 13
  },
  {
    label: null,
    color: 'silver',
    type: FUNCTION_KEY_PLACEHOLDER,
    keyCode: null
  }
];
