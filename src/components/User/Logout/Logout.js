import React, { useContext } from 'react';
import { logoutAction } from '../../../actions/userActions';

const Logout = ({ user, dispatch }) => {
  return (
    <div className="Logout">
      <form onSubmit={e => { e.preventDefault(); dispatch(logoutAction()); }}>
        Logged In as: <b>{user}</b>
        <input type="submit" value="Logout" />
      </form>
    </div>
  );
}

export default Logout;