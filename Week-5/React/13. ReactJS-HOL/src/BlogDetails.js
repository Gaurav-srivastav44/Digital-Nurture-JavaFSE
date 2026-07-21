import React from 'react';

function BlogDetails({ blogs }) {
  return (
    <div className="section">
      <h2>Blog Details</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <strong>{blog.title}</strong>: {blog.summary}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
