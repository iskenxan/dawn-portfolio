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
            <p >&copy; Ashley Dawn Samatova 2018</p>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default Footer;
