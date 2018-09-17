import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header, Footer } from 'components';

const Layout = ({ children }) =>
  <App>
    <Header />
    <Main>{ children }</Main>
    <Footer />
  </App>;

export default Layout;

Layout.propTypes = {
  children: PropTypes.node
};

const App = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
`;
