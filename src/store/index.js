import {
  Middleware,
  combineReducers,
  compose,
  createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const rootReducer = combineReducers({
  state: reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk)),
);
export const persistor = persistStore(store);
