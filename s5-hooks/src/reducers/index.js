// export function counterReducer(state = { value: 0 }, action) {
//     switch (action.type) {
//       case 'counter/incremented':
//         return { value: state.value + 1 }
//       case 'NEW_TEXT':
//         return { text: action.payload }
//       default:
//         return state
//     }
//   }

import { combineReducers } from 'redux'
import { postsReducer } from './posts'
import { errorReducer }  from './error'

const app = combineReducers({
    posts: postsReducer,
    error: errorReducer,
})

export default app
