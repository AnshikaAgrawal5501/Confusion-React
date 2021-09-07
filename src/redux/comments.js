import comments from '../Shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = comments, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            return state.concat(comment);

        default:
            return state;
    }
};