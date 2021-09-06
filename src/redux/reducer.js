import dishes from '../Shared/dishes';
import comments from '../Shared/comments';
import promotions from '../Shared/promotions';
import leaders from '../Shared/leaders';

export const initialState = {
    dishes,
    comments,
    promotions,
    leaders
};

export const Reducer = (state = initialState, action) => {
    return state;
};