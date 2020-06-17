import React, { useState } from 'react';

const Register = ({ setUser }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const handleUserName = (e) => {
    setUserName(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const handlePasswordRepeat = (e) => {
    setPasswordRepeat(e.target.value);
  }
  return (
    <div className="Register">
      <form onSubmit={e => { e.preventDefault(); setUser(userName); }}>
        <label htmlFor="Register_UserName">User Name:</label>
        <input id="Register_UserName" type="text" name="Register_UserName" value={userName} onChange={handleUserName} autoComplete="off" />
        <label htmlFor="Register_Password">Password:</label>
        <input id="Register_Password" type="password" name="Register_Password" autoComplete="off" value={password} onChange={handlePassword} />
        <input id="Register_Password_Repeat" type="password" name="Register_Password_Repeat" autoComplete="off" value={passwordRepeat} onChange={handlePasswordRepeat} />
        <input type="submit" value="Register"
          disabled={userName.length === 0 || password !== passwordRepeat}
        />
      </form>
    </div>
  );
}

export default Register;