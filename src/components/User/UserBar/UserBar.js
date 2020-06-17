import React, { useState } from 'react';
import Logout from '../Logout/Logout';
import Login from '../Login/Login';
import Register from '../Register/Register';

const UserBar = ({user, setUser}) => {
  const renderContent = () => {
    if (user) {
      return <Logout user={user} setUser={setUser}/>
    } else {
      return (
        <>
          <Login setUser={setUser}/>
          <Register setUser={setUser}/>
        </>
      )
    }
  }
  return (
    <div className="UserBar">
      {renderContent()}
    </div>
  );
}

export default UserBar;