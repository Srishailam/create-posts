import React, { useState, useReducer } from 'react';
import UserBar from './components/User/UserBar/UserBar';
import CreatePost from './components/Post/CreatePost/CreatePost';
import PostList from './components/Post/PostList/PostList';

const defaultPosts = [
  { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
  { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl' }
];

function userReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
    case 'REGISTER':
      return action.userName;
    case 'LOGOUT':
      return '';
    default:
      return new Error();
  }
}

function postsReducer(state, action) {
  switch (action.type) {
    case 'CREATE_POST':
      const newPost = {
        title: action.title,
        content: action.content,
        author: action.author
      }

      return [newPost, ...state];
    default:
      return new Error();
  }
}

function App() {
  const [posts, dispatchPosts] = useReducer(postsReducer, defaultPosts);
  const [user, dispatchUser] = useReducer(userReducer, '');
  return (
    <div className="App">
      <UserBar user={user} dispatch={dispatchUser} />
      <br />
      {user && <CreatePost user={user} posts={posts} dispatch={dispatchPosts} />}
      <br />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
