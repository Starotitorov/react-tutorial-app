import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Layout from '../features/Layout';

import NotFound from '../features/NotFound';

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ '../features/Posts'),
  loading: () => null,
  modules: ['home']
});

const About = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ '../features/About'),
  loading: () => null,
  modules: ['about']
});

const Routes = () =>
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>;

export default Routes;
