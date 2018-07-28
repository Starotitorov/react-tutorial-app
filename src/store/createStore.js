import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './rootReducer';
import rootEpic from './rootEpic';
import thunk from 'redux-thunk';

export default (initialState = {}) => {
  const epicMiddleware = createEpicMiddleware();
  const middleware = [thunk, epicMiddleware];

  const composeEnhancers =
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

  epicMiddleware.run(rootEpic);

  return store;
}
