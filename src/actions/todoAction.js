import {SAVE_TODO_DETAILS} from './types';

export const saveTodoDetails = listing => {
  return {
    type: SAVE_TODO_DETAILS,
    payload: listing,
  };
};
