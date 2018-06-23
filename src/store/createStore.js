import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

export default (initialState = {}) => {
  const middleware = [thunk];

  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
      compose;

  const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
  );

  return createStore(
    rootReducer,
    initialState,
    enhancer
  );
}
