import React from 'react';
import { injectGlobal } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Layout from '../Layout';

import NotFound from '../NotFound';

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ '../Posts'),
  loading: () => null,
  modules: ['home']
});

const About = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ '../About'),
  loading: () => null,
  modules: ['about']
});

const App = () =>
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </Layout>;

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

export default App;
