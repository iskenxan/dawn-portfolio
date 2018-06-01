import React, { Component } from 'react';
import { Container, Alert } from 'reactstrap';
import { withRouter } from 'react-router-dom';

class Error extends Component {

  render() {
    let error = "Error Occurred!";
    const { state } = this.props.location;

    if(state && state.error){
      error = state.error;
    }

    return(
      <Container className="screen-height d-flex align-items-center" fluid>
        <Alert color="danger w-75 mx-auto">
          {error}
        </Alert>
      </Container>
    )
  }

}

export default withRouter(Error);
