import React from 'react';
import { Panel } from 'react-bootstrap'

const Post = ({ post, onRemoveList }) => {
  return (
    <Panel bsStyle="primary" key={post.id}>
      <Panel.Heading onClick={() => onRemoveList(post.id)}>
        <Panel.Title componentClass="h3">{post.title}</Panel.Title>
      </Panel.Heading>
      <Panel.Body>{post.excerpt}</Panel.Body>
    </Panel>
  )
}

export default Post;