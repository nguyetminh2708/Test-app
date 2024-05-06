import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import promise from 'redux-promise-middleware';
import { thunk } from 'redux-thunk';
import { rootReducer } from './reducers';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const middlewares = [thunk, promise];

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['root', 'auth', 'print', 'login'],
};

const enhancer = compose(applyMiddleware(...middlewares));
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, undefined, enhancer);
const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { persistor };
export default store;
