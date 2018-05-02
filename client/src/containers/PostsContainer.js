import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import { API_ROOT } from '../api-config.js';
import { initialPosts, removePost } from '../actions/PostActions';

import Post from '../components/Post';

class PostsContainer extends Component {
  constructor(props) {
    super(props)
    this.props.initialPosts();
  }

  removePost(postId) {
    this.props.removePost(postId);
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        {posts.map(post => {
            return (<Post post={post} key={post.id} onRemoveList={this.removePost.bind(this)} />)
        })}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    removePost, initialPosts }, dispatch)
}

const mapReduxStateToProps = ({ posts }) => {
  return { posts };
};

export default connect(mapReduxStateToProps, mapDispatchToProps)(PostsContainer);