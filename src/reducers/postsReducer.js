export default function postsReducer(state, action) {
  switch (action.type) {
    case 'CREATE_POST':
      const newPost = {
        title: action.title,
        content: action.content,
        author: action.author
      }

      return [newPost, ...state];
    default:
      return state;
  }
}