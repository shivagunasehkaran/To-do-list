// redux specific imports
import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

// Middleware : Redux Persist Config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //Save specific Reducers
  whitelist: ['todo'],
  // Don't save specific Reducers
  blacklist: [],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

export {store, persistor};
