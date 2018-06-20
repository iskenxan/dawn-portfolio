import React, { Component } from 'react';
import { Container, Modal, ModalBody } from 'reactstrap';
import GalleryCarousel from './GalleryCarousel';

class GalleryModal extends Component {

  closeButton = () => {
    return(
      <button
        className="close"
        style={{ marginTop:"25px", marginRight:"10px"}}
        onClick={this.props.toggle}>&times;</button>
      );
  }

  getItemsSrc = () => {
    return this.props.post.photos.map(photo => {
      return photo.original_size.url;
    });
  }


  render() {
    if(!this.props.post || !this.props.post.photos){
      return null;
    }
    return (
        <Modal  isOpen={this.props.isOpen} backdropClassName="gallery-backdrop" className="p-0 shadow-sm" toggle={this.props.toggle} external={this.closeButton()}>
          <ModalBody className="p-0">
            <GalleryCarousel items={this.getItemsSrc()} />
          </ModalBody>
        </Modal>
    );
  }

}

export default GalleryModal;
