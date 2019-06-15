import uuid from 'uuid';
export const FUNCTION_KEY_ENTER = 'FUNCTION_KEY_ENTER';
export const FUNCTION_KEY_CLEAR = 'FUNCTION_KEY_CLEAR';
export const FUNCTION_KEY_CANCEL = 'FUNCTION_KEY_CANCEL';
export const FUNCTION_KEY_PLACEHOLDER = 'FUNCTION_KEY_PLACEHOLDER';

export const KEYPAD_FUNCTION_KEYS = [
  {
    id: uuid(),
    label: 'Cancel',
    color: 'danger',
    type: FUNCTION_KEY_CANCEL,
    keyCode: null,
  },
  {
    id: uuid(),
    label: 'Clear',
    color: 'warning',
    type: FUNCTION_KEY_CLEAR,
    keyCode: 8,
  },
  {
    id: uuid(),
    label: 'Enter',
    color: 'success',
    type: FUNCTION_KEY_ENTER,
    keyCode: 13,
  },
  {
    id: uuid(),
    label: null,
    color: 'silver',
    type: FUNCTION_KEY_PLACEHOLDER,
    keyCode: null,
  },
];
