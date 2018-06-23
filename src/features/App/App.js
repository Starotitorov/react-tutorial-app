import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import Posts  from '../Posts';
import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <Logo src={logo} alt="logo" />
          <Title>Welcome to React</Title>
        </Header>
        <main>
          <Container>
            <Row>
              <Col sm={{ size: 6, offset: 3 }}>
                <Posts />
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    );
  }
}

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
  text-align: center;
`;

const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  animation: ${appLogoSpin} infinite 20s linear;
  height: 80px;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

export default App;
