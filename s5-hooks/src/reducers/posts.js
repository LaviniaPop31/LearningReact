import {SET_POSTS, CLEAR_POSTS} from '../actions/posts'

const initialValues = {
  list: [],
  loading: false,
}

export function postsReducer(state = initialValues, action) {
    switch (action.type) {
      case SET_POSTS:
        return { ...state, list: action.payload}    // payload-ul actiunii e ce trimit prin dispatch
      case CLEAR_POSTS:       //stringurile acestea(ex.'CLEAR_POSTS') se pun in constante
        return { ...state, posts: []}
      default:
        return state
    }
  }