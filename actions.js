import uuid from 'uuid';

export const EDIT_COMMENT = 'EDIT_COMMENT',
            CREATE_COMMENT = 'CREATE_COMMENT',
            DELETE_COMMENT = 'DELETE_COMMENT',
            THUMB_UP_COMMENT = 'THUMB_UP_COMMENT',
            THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id,
        text
    }
}

function createComment(text) {
    return {
        type: CREATE_COMMENT,
        id: uuid.v4
    }
}

function deleteComment(id) {
    return {
        type: DELETE_COMMENT,
        id
    }
}

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id,
    }
}

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
    }
}