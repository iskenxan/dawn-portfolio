import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/ActionTumblr';

const tag = 'front-page';


class Landing extends Component {
  constructor(props) {
    super(props);
    this.getPosts();
  }


  getPosts = () => {
    const { posts, loading } = this.props;
    if(posts.length <= 0 && !this.props.loading){
      this.props.fetchPosts("front-page");
    }
  }


  render() {
    console.log(this.props.posts)
    if(this.props.posts.length <= 0){
      return null;
    }
    return (
      <div>
        <img className="img-fluid" src={this.props.posts[0].photos[0].original_size.url} />
      </div>
    );
  }

}

function mapStateToProps(state){
  return {
    posts: state.tumblr.posts[tag],
    loading: state.tumblr.loading[tag]
  }
}

export default withRouter(connect(mapStateToProps,{fetchPosts})(Landing));
