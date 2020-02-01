import React, { Component } from 'react';
import GithubCorner from 'react-github-corner';
import { Container, Row, Col } from 'reactstrap';
import Posts  from '../Posts';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <main>
        <Container>
          <Row>
            <Col xs="12" sm={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
              <Posts />
            </Col>
          </Row>
        </Container>
        <GithubCorner href="https://github.com/Starotitorov/react-social-app" />
      </main>
    );
  }
}

export default App;
