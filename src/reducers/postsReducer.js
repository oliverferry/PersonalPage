const initialState = []

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_POST': {
        const { postId, content } = action.payload;
        return [
          ...state,
          {
            id: postId,
            title: content.title,
            url: content.url,
            desc: content.desc
          },
        ]
      }
      case 'EDIT_POST': {
        const postObj = action.payload;
        const index = state.findIndex(post => post.id === postObj.id)
        const newState = [...state]
        newState[index] = postObj
        return newState
      }
      case 'DELETE_POST': {
        const { postId } = action.payload;
        let newState = state.filter(post => post.id !== postId)
        return newState
      }
      default:
        return state
    }
  }
  