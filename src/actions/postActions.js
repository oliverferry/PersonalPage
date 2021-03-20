let nextTodoId = 0;

export const addPost = content => ({
    type: 'ADD_POST',
    payload: {
      postId: ++nextTodoId,
      content
    }
  });

  export const deletePost = postId => ({
    type: 'DELETE_POST',
    payload: {
      postId: postId
    }
  });

  export const editPost = post => ({
    type: 'EDIT_POST',
    payload: post
  });