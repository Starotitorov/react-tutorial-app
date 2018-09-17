import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

const About = () =>
  <Container>
    <Row>
      <Col>
        <CustomJumbotron>
          <h1 className="display-3">Social app</h1>
          <p className="lead">
            This is an example project that shows useful approaches and techniques to write React+Redux applications.
            The application uses JSONPlaceholder service as fake REST API.
          </p>
        </CustomJumbotron>
      </Col>
    </Row>
  </Container>;

const CustomJumbotron = styled(Jumbotron)`
  margin-top: 2rem;
`;

export default About;
