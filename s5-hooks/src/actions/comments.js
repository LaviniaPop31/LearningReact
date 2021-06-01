export const SET_COMMENTS = 'SET_COMMENTS'
export const CLEAR_COMMENTS = 'CLEAR_COMMENTS';


export function setComments(list) {
    console.log(list)
    return {
        type: SET_COMMENTS, 
        payload: list
    }
}

export function clearComments() {
    return {
        type: CLEAR_COMMENTS
    }
}
