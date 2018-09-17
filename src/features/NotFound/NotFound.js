import React from 'react';
import styled from 'styled-components';

const NotFound = () =>
  <Container>
    <h1>Oops!</h1>
    <h2>404 Not Found</h2>
    <p>Sorry, an error has occured, Requested page not found!</p>
  </Container>;

export default NotFound;

const Container = styled.div`
  padding: 40px 15px;
  text-align: center;
`;
