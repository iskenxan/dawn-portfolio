import React, { Component } from 'react';
import TopMenu from '../components/TopMenu';
import { Container } from 'reactstrap';
class Contact extends Component {

  render() {
    return (
      <div>
        <TopMenu />
        <Container fluid={true}>
          Contact
        </Container>
      </div>
    );
  }

}

export default Contact;
