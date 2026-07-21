import React, { Component } from 'react';
import Post from './Post';
import './Posts.css';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null,
      hasError: false,
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }))
      .catch((error) => this.setState({ error, hasError: true }));
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error) {
    this.setState({ error, hasError: true });
  }

  render() {
    const { posts, hasError } = this.state;

    if (hasError) {
      return <div className="error">Unable to load posts</div>;
    }

    return (
      <div className="posts-container">
        {posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
