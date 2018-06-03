import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Alert,
  Button
} from 'reactstrap';
import AdminCategory from '../components/AdminCategory';
import { getCategoryImages } from '../utils/admin';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.getImages();
  }

  getImages = () => {
    const frontPage = getCategoryImages("front-page");
    const fashion = getCategoryImages("fashion");
    const portraits = getCategoryImages("portraits");
    const advertising = getCategoryImages("advertising");

    this.state = ({
      frontPage,
      fashion,
      portraits,
      advertising
    });
  }

  render() {
    console.log(this.state);
    return (
      <Container fluid >
        <Row>
          <Col>
            <Alert color="primary">Hello, Ashley!</Alert>
            <Button color="primary">+ Add Photos</Button>
          </Col>
        </Row>
        <Row className="mt-5 px-2">
          <AdminCategory imageGroups={this.state.frontPage} title="front page" />
          <AdminCategory imageGroups={this.state.fashion} title="fashion" />
          <AdminCategory imageGroups={this.state.portraits} title="portraits" />
          <AdminCategory imageGroups={this.state.advertising} title="advertising" />
        </Row>
      </Container>
    );
  }
}

export default Admin;
