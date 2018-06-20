import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/ActionTumblr';
import '../style/landing.css';
import Icon from '../media/logo_white.svg';
import { Row, Button } from 'reactstrap';
import { ViewPager, Frame, Track, View } from 'react-view-pager'
import { getRandomInt } from '../utils/Util';
import Loading from '../components/Loading';
import _ from 'lodash';
const tag = 'front-page';


class Landing extends Component {
  constructor(props) {
    super(props);
    this.getPosts();
    this.state = {
      currentPost: 0,
      timer: null
    }
  }


  componentWillMount() {
    document.getElementById("root").classList.add("landing");
    document.body.classList.add("landing");
    let timer = setInterval(this.tick, 3000);
    this.setState({timer});
  }

  componentWillUnmount() {
    document.getElementById("root").classList.remove("landing");
    document.body.classList.remove("landing");
    window.clearInterval(this.state.timer);
  }

  tick = () => {
    const { currentPost } = this.state;
    let nextPost = currentPost + 1;
    if (nextPost >= this.props.urls.length - 1){
      nextPost = 0;
    }
    this.setState({currentPost: nextPost});
  }


  getPosts = () => {
    const { posts, loading } = this.props;
    if(posts.length <= 0 && !this.props.loading) {
      this.props.fetchPosts("front-page");
    }
  }


  getBackgroundStyle = (image) => {
    return {
      backgroundImage: `url(${image})`
    }
  }

  takeToGallery = () => {
    this.props.history.push("/gallery");
  }

  getViews = () => {
    const images = this.props.urls;
    return images.map(image => {
      return (
        <View style = {this.getBackgroundStyle(image)} className="landing-bg"></View>
      );
    });
  }

  getSlideShow = () => {
    return (
      <ViewPager tag="main">
        <Frame className="frame" accessibility={false} autoSize={false}>
          <Track
            ref={c => this.track = c}
            viewsToShow={2}
            currentView={this.state.currentPost}
            className="track"
            >
              {this.getViews()}
          </Track>
        </Frame>
    </ViewPager>
    )
  }

  render() {
    if(this.props.posts.length <= 0){
      return (<Loading />)
    }
    const slideShow = this.getSlideShow();
    return (
      <div className="w-100 h-100">
        <div className="h-100 d-flex">
          <div className="m-auto flex-row">
            <Row>
              <img onClick={this.takeToGallery} src={Icon} className="landing-icon mx-auto" />
            </Row>
            <Row className="mt-4">
              <Button onClick={this.takeToGallery}  outline size="lg" color="light" >View Portfolio</Button>
            </Row>
          </div>
        </div>
        {slideShow}
        <div className="landing-overlay"></div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    posts: state.tumblr.posts[tag],
    loading: state.tumblr.loading[tag],
    urls: getAllImages(state.tumblr.posts[tag])
  }
}

function getAllImages(posts) {
  let images = [];
  posts.map(post => {
    const photoUrls = post.photos.map(photo => {
      return photo.original_size.url;
    });
    images = [...images, ...photoUrls]
  });

  return _.shuffle(images);
}

export default withRouter(connect(mapStateToProps,{fetchPosts})(Landing));
