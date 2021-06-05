// packages
import * as Actions from '../actions/types';

const initialState = {
  todoDetails: [],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.SAVE_TODO_DETAILS:
      return {
        ...state,
        todoDetails: [].concat(...state.todoDetails, action.payload),
      };
    default:
      return state;
  }
}

export default todoReducer;
