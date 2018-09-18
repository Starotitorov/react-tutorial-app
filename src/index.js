import React from 'react';
import { Provider } from 'react-redux';
import { render, hydrate } from 'react-dom';
import Loadable from 'react-loadable';
import { Frontload } from 'react-frontload';
import { ConnectedRouter } from 'connected-react-router';
import createStore from './store/createStore';
import App from './features/App';

import 'bootstrap/dist/css/bootstrap.min.css';

const { store, history } = createStore();

const Application = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Frontload noServerRender>
        <App />
      </Frontload>
    </ConnectedRouter>
  </Provider>
);

const root = document.querySelector('#root');

if (process.env.NODE_ENV === 'production') {
  Loadable.preloadReady().then(() => {
    hydrate(Application, root);
  });
} else {
  render(Application, root);
}
