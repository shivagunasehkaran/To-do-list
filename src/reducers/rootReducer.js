import todoReducer from './todoReducer';
import {combineReducers} from 'redux';

// all other reducers should be combined in this root reducer
const appReducer = combineReducers({
  todo: todoReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
