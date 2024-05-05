export {};
// import {applyMiddleware, compose, createStore} from 'redux';
// import {persistStore, persistReducer} from 'redux-persist';
// import promise from 'redux-promise-middleware';
// import thunk from 'redux-thunk';
// import reduxFlipper from 'redux-flipper';
// import {rootReducer} from './reducers';
// import {reduxStorage} from '@/features/system/store/localStorage';

// const middlewares = [thunk, promise];

// const persistConfig = {
//   key: 'root',
//   storage: reduxStorage,
//   whitelist: ['root', 'auth', 'print', 'login'],
// };

// if (__DEV__) {
//   const createDebugger = reduxFlipper;
//   middlewares.push(createDebugger());
// }

// const enhancer = compose(applyMiddleware(...middlewares));
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const store = createStore(persistedReducer, undefined, enhancer);
// const persistor = persistStore(store);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export {persistor};
// export default store;
