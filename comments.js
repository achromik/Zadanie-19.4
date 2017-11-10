import * as actions from "./actions";

function comments(state = [], action) {
    switch(action.type) {
        case actions.CREATE_COMMENT:
            return  [{
                id: action.id,
                text: action.text,
                votes: 0
            },
            ...state];
        
        case actions.DELETE_COMMENT:
            return [
                state.filter( comment => comment.id !== action.id)
            ];

        case actions.EDIT_COMMENT:
            return [
                state.map( comment => {
                    return comment.id === action.id ?
                        Object.assign({}, comment, {
                            text: action.text
                        }) :
                        comment
                })
            ]
           
        case actions.THUMB_UP_COMMENT:
            return [
                state.map( comment => {
                    return comment.id === action.id ?
                        Object.assign({}, comment, {
                            votes: comment.votes + 1
                        }) :
                        comment
                })
            ]    

        case actions.THUMB_DOWN_COMMENT:
            return [
                state..map ( comment => {
                    return comment.id === action.id ?
                        Object.assign({}, comment, {
                            votes: comment.votes - 1
                        }) :
                        comment 
                })
            ]    

        default:
            return state;
    }
}        

export default comments;