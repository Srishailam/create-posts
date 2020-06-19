import React, { useState } from 'react';

import { loginAction } from '../../../actions/userActions';


const Login = ({ dispatch }) => {

  const [userName, setuserName] = useState('')
  const handleUserName = (e) => {
    setuserName(e.target.value);
  }
  return (
    <div className="Login">
      <form onSubmit={e => { e.preventDefault(); dispatch(loginAction(userName)); }}>
        <label htmlFor="Login_UserName">User Name:</label>
        <input id="Login_UserName" type="text" name="Login_UserName" onChange={handleUserName} value={userName} autoComplete="off" />
        <label htmlFor="Login_Password" autoComplete="off">Password:</label>
        <input id="Login_Password" type="password" name="Login_Password" />
        <input type="submit" value="Login" disabled={userName.length === 0} />
      </form>
    </div>
  );
}

export default Login;