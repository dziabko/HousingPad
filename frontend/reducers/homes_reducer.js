import merge from 'lodash/merge';

import { RECEIVE_HOMES, RECEIVE_HOME, RECEIVE_REVIEW, RECEIVE_RECOMMENDATION } from '../actions/home_actions';

const homesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_HOMES:
            return action.homes;
        case RECEIVE_HOME:
            const newHome = {[action.home.id]: action.home};
            return merge(newState, newHome);
        case RECEIVE_REVIEW:
            newState[action.review.home_id].reviewIds.push(action.review.id);
            return newState;
        case RECEIVE_RECOMMENDATION:
            const newRecHome = {[action.payload.id]: action.payload}
            return merge(newState, newRecHome)
        default:
            return state;
    }
};

export default homesReducer;