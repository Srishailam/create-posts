export default function userReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
    case 'REGISTER':
      return action.userName;
    case 'LOGOUT':
      return '';
    default:
      return state;
  }
}