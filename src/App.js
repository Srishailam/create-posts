import React, { useReducer, useEffect, useState } from 'react';

import UserBar from './components/User/UserBar/UserBar';
import CreatePost from './components/Post/CreatePost/CreatePost';
import PostList from './components/Post/PostList/PostList';
import appReducer from './reducers/appReducer';
import Header from './components/Header/Header';
import { ThemeContext } from './contexts/contexts';
import ChangeTheme from './components/ChangeTheme/ChangeTheme';

const defaultPosts = [
  { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
  { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl' }
];

function App() {
  const [state, dispatch] = useReducer(appReducer, { user: '', posts: defaultPosts });
  const { user, posts } = state;
  const [theme, setTheme] = useState({
    primaryColor: 'deepskyblue',
    secondaryColor: 'coral'
  })

  useEffect(() => {
    if (user) {
      document.title = `${user} - React Hooks Blog`;
    } else {
      document.title = `Welcome - React Hooks Blog`;
    }
  }, [user])

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Header text="React Hooks Blog"></Header>
        <ChangeTheme theme={theme} setTheme={setTheme} />
        <UserBar user={user} dispatch={dispatch} />
        <br />
        {user && <CreatePost user={user} posts={posts} dispatch={dispatch} />}
        <br />
        <PostList posts={posts} />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
