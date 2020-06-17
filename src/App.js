import React, { useState } from 'react';
import UserBar from './components/User/UserBar/UserBar';
import CreatePost from './components/Post/CreatePost/CreatePost';
import PostList from './components/Post/PostList/PostList';

const defaultPosts = [
  { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
  { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl' }
];
function App() {
  const [posts, setPosts] = useState(defaultPosts);
  const [user, setUser] = useState('')
  return (
    <div className="App">
      <UserBar user={user} setUser={setUser} />
      <br />
      {user && <CreatePost user={user} posts={posts} setPosts={setPosts} />}
      <br />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
