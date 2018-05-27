import React, { Component } from 'react';
import { Container } from 'reactstrap';
import TopMenu from '../components/TopMenu';

class About extends Component {

  render() {
    return (
      <div>
        <TopMenu />
        <Container fluid={true}>
          About
        </Container>
      </div>
    );
  }

}

export default About;
