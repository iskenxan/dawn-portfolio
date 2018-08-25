 import React, { Component } from 'react';
 import TopMenu from '../components/TopMenu';
 import Footer from '../components/Footer';
 import { Container, Card, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';
 import GalleryModal from '../components/GalleryModal';
 import Masonry from 'react-masonry-component';
 import { connect } from 'react-redux';
 import { fetchPosts } from '../actions/ActionTumblr';
 import { getTag } from '../utils/Util';
 import Loading from '../components/Loading';
 import '../style/index.css';

 const masonryOptions = {
   percentPosition: true
 };

 class Gallery extends Component {
   constructor(props) {
     super(props);
     this.state = {
       isModalOpen: false,
       modalPost: null
     };
   }

   loadPosts = () => {
     const tag = this.getCurrentTag(tag);
     const currentPosts = this.props.posts[tag];
     if (currentPosts.length <= 0 && !this.props.loading[tag]){
       this.props.fetchPosts(tag);
     }

     return currentPosts;
   };


   getCurrentTag = () => {
     const { pathname } = this.props.location;
     return getTag(pathname);
   };


   getColumns = () => {
     console.log(this.props.posts)
     const posts = this.loadPosts();
     return posts.map(post => {
       const image = post.photos[0].original_size.url;
       return(
         <Card key={image} inverse className="col-sm-4 p-0 rounded-0 border-1 border-white">
           <CardImg className="rounded-0" width="100%"  src={image} />
           {this.getOverlay(post)}
         </Card>
       );
     });
   };

   getOverlay = (post) => {
       return (
         <CardImgOverlay className="d-flex" onClick={() => this.toggleModal(post)}>
           <CardText className="m-auto">{post.summary}</CardText>
         </CardImgOverlay>
       );
    };

   toggleModal = (post) => {
     this.setState({isModalOpen: !this.state.isModalOpen, modalPost: post})
   };


   render() {
     const tag = this.getCurrentTag();
     if(this.props.loading[tag]) {
       return (<Loading />);
     }

     return(
       <div>
         <TopMenu />
         <Container className="content-container" fluid>
           <Masonry
                className={"grid"}
                options={masonryOptions} >
                {
                  this.getColumns()
                }
            </Masonry>
         </Container>
         <Footer />
         <GalleryModal post={this.state.modalPost} isOpen={this.state.isModalOpen} toggle={this.toggleModal} />
       </div>
     );
   }
 }

 function mapStateToProps(state){
   return {
     posts: state.tumblr.posts,
     loading: state.tumblr.loading
   }
 }


 export default connect(mapStateToProps, { fetchPosts })(Gallery);
