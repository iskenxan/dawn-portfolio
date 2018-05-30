import React, { Component } from 'react';
import { Container, Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import GalleryCarousel from './GalleryCarousel';

class GalleryModal extends Component {

  closeButton = () => {
    return(
      <button
        className="close"
        style={{ position: 'absolute', top: '25px', right: '25px', color: '#fff' }}
        onClick={this.props.toggle}>&times;</button>
      );

  }


  render() {
    return (
      <Container>
        <Modal isOpen={this.props.isOpen} className="p-0" toggle={this.props.toggle} external={this.closeButton()}>
          <ModalBody className="p-0">
            <GalleryCarousel items={this.props.items} />
          </ModalBody>
        </Modal>
      </Container>
    );
  }

}

export default GalleryModal;
