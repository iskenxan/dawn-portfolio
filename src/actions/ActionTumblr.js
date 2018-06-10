import axios from 'axios';

const API_KEY = "VORcr9wnTZ7xvMjfDPSZ6IJsyUJ0aNNaOs7Vwgqe7SD2whJvOg";
const API_SECRET = "oSQgqNZ4wqSNAxMu7HRStL25ronvkjokJDmEYkqyULFFszfwM5";
const BLOG_IDENT = "ashleydawnvisuals.tumblr.com";
const REQUEST_URL = `https://api.tumblr.com/v2/blog/${BLOG_IDENT}/posts/photo?api_key=${API_KEY}&tag=TAG&offset=`;


export const FETCH_SUCCESS = "fetch_success";
export const FETCH_LOADING = "fetch_loading";


function fetchSuccess(posts, tag){
  return {
    type: FETCH_SUCCESS,
    payload: {
      tag,
      posts
    }
  }
}


function fetchLoading(tag){
  return {
    type: FETCH_LOADING,
    payload: tag
  }
}


export function fetchPosts(tag){
  return (dispatch => {
    dispatch(fetchLoading(tag));
    requestPosts(tag, 0, [], posts => {
      dispatch(fetchSuccess(posts, tag));
    })
  })
}


function requestPosts(tag, offset, totalPosts, onPostFetchFinish){
  let url = REQUEST_URL + offset;
  url = url.replace('TAG', tag);
  axios.get(url).then(data => {
    const { blog, posts } = data.data.response;
    totalPosts = [...totalPosts, ...posts];
    if (offset <= blog.posts) {
      offset = offset + 19;
      requestPosts(tag,offset,totalPosts, onPostFetchFinish)
    } else {
      onPostFetchFinish(totalPosts);
    }
    });
}
