import React from 'react';

const Logout = ({ user, setUser }) => {

  return (
    <div className="Logout">
      <form onSubmit={e => { e.preventDefault(); setUser(''); }}>
        Logged In as: <b>{user}</b>
        <input type="submit" value="Logout" />
      </form>
    </div>
  );
}

export default Logout;