import React, { useState } from 'react';
import { creatPostAction } from '../../../actions/postActions';

const CreatePost = ({ user, posts, dispatch }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleContentChange = (e) => {
    setContent(e.target.value);
  }
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }
  const handleCreate = () => {
    const author = user;
    dispatch(creatPostAction(title, content, author));
    resetCreatePostForm();
  }
  const resetCreatePostForm = () => {
    setTitle('');
    setContent('');
  }
  return (
    <div className="CreatePost">
      <form onSubmit={e => { e.preventDefault(); handleCreate(); }}>
        <div className="CreatePost_Auther">Author:<b>{user}</b></div>
        <div>
          <label htmlFor="CreatePost_Title">Title:</label>
          <input autoComplete="off" id="CreatePost_Title" type="text" name="CreatePost_Title" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label htmlFor="CreatePost_Contet">Content:</label>
          <textarea id="CreatePost_Contet" autoComplete="off" value={content} onChange={handleContentChange} />
        </div>
        <input type="submit" value="Create" disabled={title.length === 0 || content.length === 0} />
      </form>
    </div>
  );
}

export default CreatePost;