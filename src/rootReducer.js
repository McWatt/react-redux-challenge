import { combineReducers } from "redux";
import merge from 'lodash/merge';

export const REVIEWS_ADD = "Reviews/ADD_REVIEW";
export const REVIEWS_REMOVE = "Reviews/REMOVE_REVIEW";
export const REVIEWS_UPDATE = "Reviews/UPDATE_REVIEW";

export const reviewsAdd = (userName, content, doctorId, id) => {
    return {
        payload: {
            userName,
            content,
            doctorId,
            id,
        },
        type: REVIEWS_ADD,
    }
};

export const reviewsRemove = id => {
    return {
        payload: {
            id,
        },
        type: REVIEWS_REMOVE
    }
};

export const reviewsUpdate = (userName, content, reviewId) => {
    return {
        payload: {
            userName,
            content,
            reviewId,
        },
        type: REVIEWS_UPDATE,
    }
};

const reviews = (state = {}, action) => {
    switch (action.type) {
        case REVIEWS_ADD:
            return merge({}, state, {
              [action.payload.id]: { ...action.payload }
            });
        case REVIEWS_REMOVE:
            return merge({}, state, {
                [action.payload.id]: { ...action.payload }
            });
        case REVIEWS_UPDATE:
            return merge({}, state, {
                [action.payload.reviewId]: { ...action.payload }
            });
        default:
            return state;
    }
};


export const DOCTORS_REMOVE_REVIEW = 'Doctors/REMOVE_REVIEW';
export const DOCTORS_ADD_REVIEW = 'Doctors/ADD_REVIEW';

export const doctorsRemoveReview = (doctorId, reviewId) => {
    return {
        type: DOCTORS_REMOVE_REVIEW,
        payload: {
            doctorId,
            reviewId,
        }
    }
}

export const doctorsAddReview = (doctorId, reviewId) => {
    return {
        type: DOCTORS_ADD_REVIEW,
        payload: {
            doctorId,
            reviewId,
        }
    }
}

const doctors = (state = {}, action) => {
    switch (action.type) {
        case DOCTORS_REMOVE_REVIEW:
            // refactor into something cleaner without the need to manually clone things
            const stateWithRemovedReview = (state, action) => {
                const clonedState = { ...state };
                clonedState[action.payload.doctorId].reviewIds = state[action.payload.doctorId].reviewIds.filter(id => id !== action.payload.reviewId);

                return clonedState;
            };

            return stateWithRemovedReview(state, action);

        case DOCTORS_ADD_REVIEW:
            // refactor into something cleaner without the need to manually clone things
            const stateWithAddedReview = (state, action) => {
                const clonedState = { ...state };
                const clonedIds = [...state[action.payload.doctorId].reviewIds];
              clonedIds.push(action.payload.reviewId);
                clonedState[action.payload.doctorId].reviewIds = clonedIds;

                return clonedState;
            };

            return stateWithAddedReview(state, action);

        default:
            return state;
    }
};

const doctorsReducers = combineReducers({
    reviews,
    doctors,
});

export default doctorsReducers;
