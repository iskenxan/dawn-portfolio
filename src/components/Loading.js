import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { BeatLoader } from 'react-spinners';

class Loading extends Component {

  render() {
    return (
      <Row style={{marginLeft: 0}} className="loader-container align-items-center">
        <div className="mx-auto">
          <BeatLoader
            color={'rgb(62, 62, 62)'}
            loading={true}
          />
        </div>
      </Row>
    );
  }

}

export default Loading;
