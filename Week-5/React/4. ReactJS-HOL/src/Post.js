import React from 'react';
import './Post.css';

function Post({ title, body }) {
  return (
    <div className="post-card">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export default Post;
