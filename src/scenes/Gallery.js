 import React, { Component } from 'react';
 import TopMenu from '../components/TopMenu';
 import { Container } from 'reactstrap';
 
 class Gallery extends Component {

   render() {
     return(
       <div>
        <TopMenu />
        <Container fluid={true}>
          Gallery
       </Container>
       </div>
     );
   }
 }

 export default Gallery;
