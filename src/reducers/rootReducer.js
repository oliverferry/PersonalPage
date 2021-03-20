import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import profileReducer from './profileReducer'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  posts: postsReducer,
  profile: profileReducer
})

export default rootReducer