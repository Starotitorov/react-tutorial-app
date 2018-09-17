import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';

const Footer = () =>
  <FooterWrapper>
    <Container>
      <Row>
        <Col className="text-center">
          <FooterCopyright className="text-center">
            © 2018 Copyright:
            <Author href="https://github.com/Starotitorov"> Artem Starotitorov</Author>
          </FooterCopyright>
        </Col>
      </Row>
    </Container>
  </FooterWrapper>;

export default Footer;

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  border-top: 1px solid #e7e7e7;
`;

const Author = styled.a`
  color: rgba(0,0,0,.9);
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    color: rgba(0,0,0,.9);
    text-decoration: none;
  }
`;

const FooterCopyright = styled.div`
  overflow: hidden;
  color: rgba(0, 0, 0, .6);
`
