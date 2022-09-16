/* eslint-disable @typescript-eslint/no-var-requires */
//import isAndroid from 'constants/platform';
import {Middleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import createDebugger from 'redux-flipper';
import {configureStore, MiddlewareArray} from '@reduxjs/toolkit';
import rootReducer from '../reducer';
import saga from '../Productlist/saga';



const sagaMiddleware = createSagaMiddleware();
const middlewares: Middleware[] = [sagaMiddleware];

if (__DEV__) {
  const reduxFlipperDebugger = createDebugger();
  middlewares.push(reduxFlipperDebugger);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: new MiddlewareArray().concat(middlewares),
  devTools: process.env.NODE_ENV !== 'production',
});

//const persistor = persistStore(store);

sagaMiddleware.run(saga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export {store, sagaMiddleware};
