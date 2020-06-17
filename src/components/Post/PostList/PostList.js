import React from 'react';
import Post from '../Post/Post';

const PostList = ({ posts = [] }) => {
  const renderPosts = () => {
    return posts.map((eachPost, i) => (
      <Post
        key={i}
        title={eachPost.title}
        content={eachPost.content}
        author={eachPost.author}
      />
    ));
  }
  return (
    <div className="PostList">
      {renderPosts()}
    </div>
  );
}

export default PostList;