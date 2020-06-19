import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/contexts';

const Post = ({ title, content, author }) => {
  const { secondaryColor } = useContext(ThemeContext)
  return (
    <div className="Post">
      <h3 style={{ color: secondaryColor }}>{title}</h3>
      <div>{content}</div>
      <br />
      <i>written by <b>{author}</b></i>
    </div>
  );
}

export default Post;