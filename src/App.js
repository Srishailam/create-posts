import React, { useReducer } from 'react';

import UserBar from './components/User/UserBar/UserBar';
import CreatePost from './components/Post/CreatePost/CreatePost';
import PostList from './components/Post/PostList/PostList';
import appReducer from './reducers/appReducer';

const defaultPosts = [
  { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
  { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl' }
];


function App() {
  const [state, dispatch] = useReducer(appReducer, { user: '', posts: defaultPosts });
  const { user, posts } = state;
  return (
    <div className="App">
      <UserBar user={user} dispatch={dispatch} />
      <br />
      {user && <CreatePost user={user} posts={posts} dispatch={dispatch} />}
      <br />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
