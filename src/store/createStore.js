import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export default (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [thunk, sagaMiddleware];

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
      compose;

  const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
  );

  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
