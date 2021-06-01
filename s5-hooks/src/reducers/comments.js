import {SET_COMMENTS, CLEAR_COMMENTS} from '../actions/comments'


export function commentsReducer(state = {list:[]}, action) {
    switch (action.type) {
      case SET_COMMENTS:
        return { ...state, list: action.payload}    // payload-ul actiunii e ce trimit prin dispatch
      case CLEAR_COMMENTS:       //stringurile acestea(ex.'CLEAR_POSTS') se pun in constante
        return { ...state, comments: []}
      default:
        return state
    }
  }