 import React, { Component } from 'react';
 import TopMenu from '../components/TopMenu';
 import Footer from '../components/Footer';
 import { Container, Card, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';
 import GalleryModal from '../components/GalleryModal';
 import Masonry from 'react-masonry-component';

 const masonryOptions = {
   percentPosition: true
 }

 class Gallery extends Component {
   constructor(props) {
     super(props);
     this.state = {
       isModalOpen: false,
     };
   }

   getImages = () => {
     const required = require.context('../media/photos', false, /\.jpe?g$/);
     return required.keys().map(required);
   }

   getColumns = () => {
     const images = this.getImages();

     return images.map(image => {
       return(
         <Card inverse className="col-sm-4 p-0 rounded-0 border-1 border-white">
           <CardImg className="rounded-0" width="100%"  src={image} />
           <CardImgOverlay onClick={this.toggleModal}>
             <CardTitle>Card Title</CardTitle>
             <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
             <CardText>
               <small className="text-muted">Last updated 3 mins ago</small>
             </CardText>
           </CardImgOverlay>
         </Card>
       );
     });
   }

   toggleModal = () => {
     console.log('clicked')
     this.setState({isModalOpen: !this.state.isModalOpen})
   }


   render() {
     return(
       <div >
         <TopMenu />
         <Container className="content-container" fluid={true}>
           <Masonry
                className={"grid"}
                options={masonryOptions} >
                {this.getColumns()}
            </Masonry>
         </Container>
         <Footer />
         <GalleryModal items={this.getImages()} isOpen={this.state.isModalOpen} toggle={this.toggleModal} />
       </div>
     );
   }
 }



 export default Gallery;
