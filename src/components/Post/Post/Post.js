import React from 'react';

const Post = ({ title, content, author}) => {

  return (
    <div className="Post">
      <h3>{title}</h3>
      <div>{content}</div>
      <br/>
      <i>written by <b>{author}</b></i>
    </div>
  );
}

export default Post;