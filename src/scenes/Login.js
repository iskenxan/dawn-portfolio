import React, { Component } from 'react';
import { Container,CardTitle, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { logIn, logOut } from '../actions/ActionSession';
import * as Google from '../components/Google';


class Login extends Component {
  
  componentDidMount() {
    Google.loadGoogleScript();
  }

  onLoginError = () => {
    Google.signOut();
    this.props.history.push({
      pathname: "/error",
      state: {
        error:"Invalid gmail credentials"
      }
    });
  }


  onLogin = (data) => {
    const profile = data.getBasicProfile();
    const email = profile.getEmail();
    console.log(email);
    if(email === "ashley.gregory8594@gmail.com"){
      this.props.logIn();
      this.props.history.push("/admin");
    }
    else{
      this.onLoginError();
    }
  }

  render() {
    return (
        <Container className="screen-height pt-4 bg-light" fluid>
          <Container className="w-50 h-50 mx-auto shadow bg-white">
            <Row className="h-100 align-items-center">
              <div className="w-100">
                <CardTitle className="text-center text-muted mb-4">Admin Panel</CardTitle>
                <Row>
                  <Col xs={2}></Col>
                  <Col xs={8}>
                    <div onClick={()=>Google.signIn(this.onLogin)} id='my-signin2' ></div>
                  </Col>
                  <Col xs={2}></Col>
                </Row>
              </div>
            </Row>
          </Container>
        </Container>
    );
  }
}


export default withRouter(connect(null,{logIn, logOut})(Login));
