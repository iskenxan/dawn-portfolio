import React, { Component } from 'react';
import { Container, Modal, ModalBody, Alert, Row, Col } from 'reactstrap';
import _ from 'lodash';

class AdminModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalState: props.modalState,
      files: []
    }
  }



  onFileInput = () => {
    const { files } = this.refs.upload;
    this.setState({modalState: "edit", files});
  }


  getImageEditList = (images) => {
    return _.mapValues(images, image => {
      const reader = new FileReader();
      let url = reader.readAsDataURL(image);
      reader.onloadend = function (e) {
        console.log(reader.result);
    }.bind(this);
      return(
        <Row key={image.name}>
          <Col  className="w-75">
            <img src={image} className="img-fluid" />
          </Col>
        </Row>
      );
    });
  }


  getContent = () => {
    const { modalState } = this.state;
    if(modalState === "add"){
      return(
        <div className="p-1">
          <Alert  color="primary">Choose images to upload</Alert>
          <input ref="upload" type="file" accept=".jpeg,.jpg,.png" multiple={true} onChange={this.onFileInput} />
        </div>
      )
    }
    else if(modalState === "edit"){
      return(
        <div className="p-1">
          {this.getImageEditList(this.state.files)}
        </div>
      );
    }
  }


  render() {
    return (
      <Container>
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
          <ModalBody >
            {this.getContent()}
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

export default AdminModal;
