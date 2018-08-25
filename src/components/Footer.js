import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class Footer extends Component {

  componentWillMount() {
    document.body.classList.add("gallery");
  }

  componentWillUnmount() {
  }


  render() {
    return (
      <Container className="footer" fluid>
        <Row>
          <Col className="my-auto">
            <p>&copy; Ashley Dawn Samatova 2018</p>
            <a target="_blank" href="https://www.linkedin.com/in/iskander-samatov-026029107/"><p className="text-muted text-monospace created-by">Created by Iskander Samatov</p></a>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default Footer;
