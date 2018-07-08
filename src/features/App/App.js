import React, { Component } from 'react';
import GithubCorner from 'react-github-corner';
import { Container, Row, Col } from 'reactstrap';
import Posts  from '../Posts';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <main>
        <Container>
          <Row>
            <Col sm={{ size: 6, offset: 3 }}>
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
