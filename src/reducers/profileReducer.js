const initialState = {}

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
      case 'EDIT_PROFILE': {
        // Can return just the new todos array - no extra object around it
        return action.payload
      }
      default:
        return state
    }
  }