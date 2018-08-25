import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TopMenu from '../components/TopMenu';
import Footer from '../components/Footer';
import AboutMePhoto from '../media/about_me.jpg';
import {FacebookLink, TumblrLink } from "../utils/Data";

const iconBase = {
    height: 30,
    display: "inline-block",
    cursor: "pointer"
  };


const styles = {
  facebook: {
    ...iconBase,
    width: 17,
    height: 33
  },
  tumblr: {
    ...iconBase,
    width: 19
  },
  instragram: {
    ...iconBase,
    width: 28
  }
};

class About extends Component {

  render() {
    return (
      <div>
        <TopMenu />
        <Container className="content-container" fluid>
          <Row className="px-4 text-center">
            <blockquote className="blockquote mx-auto w-100">
            <p className="mb-0 text-center text-secondary font-weight-light"><i>There are no rules for good photographs, there are only good photographs.</i></p>
            <footer className="blockquote-footer text-dark font-weight-bold">Ansel Adams</footer>
          </blockquote>
          <hr className="w-100"/>
          </Row>
          <Row className="px-4 content-container">
            <Col xs={12} className="mb-4">
              <h2 className="text-dark"> Ashley Dawn Samatova</h2>
            </Col>
            <Col md={6} xs={12} className="pr-md-5 mb-5 mb-md-0">
              <img className="img-fluid" src={AboutMePhoto} />
            </Col>
            <Col className="d-flex" md={6} xs={12}>
              <p className="my-auto text-center about-me">Ashley Dawn Samatova is a visual creator and photographer skilled in areas of commercial and editorial work. She is a graduate majoring in Photography from Oklahoma State University Institute of Technology with experience in studio as well as on location shooting. As a travel enthusiast and natural explorer, Ashley is available for work around the world.</p>
            </Col>
            <hr className="w-100"/>
          </Row>
          <Row className="about-me-social-container">
            <Col xs={3}>
            </Col>
            <Col xs={6}>
              <Row>
                <Col className="text-center">
                  <a target="_blank" href={FacebookLink}>
                      <div style={styles.facebook} className="social-icons icon-facebook"/>
                    </a>
                </Col>
                <Col className="text-center">
                  <a target="_blank" href={TumblrLink}>
                  <div style={styles.tumblr} className="social-icons icon-tumblr" />
                  </a>
                </Col>
                <Col className="text-center">
                  <a target="_blank" >
                  <div style={styles.instragram} className="social-icons icon-insta" />
                  </a>
                </Col>
              </Row>
            </Col>
            <Col xs={3}>
            </Col>
          </Row>
        </Container>
        <Footer/>
      </div>
    );
  }

}

export default About;
