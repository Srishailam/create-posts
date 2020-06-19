import React, { useState } from 'react';
import Logout from '../Logout/Logout';
import Login from '../Login/Login';
import Register from '../Register/Register';

const UserBar = ({user, dispatch}) => {
  const renderContent = () => {
    if (user) {
      return <Logout user={user} dispatch={dispatch}/>
    } else {
      return (
        <>
          <Login dispatch={dispatch}/>
          <Register dispatch={dispatch}/>
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