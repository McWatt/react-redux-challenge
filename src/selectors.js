/**
 * 
 * @param {object} state - the full state, where doctors is a property
 * @param {string} id - the id of the doctor
 */
export const getDoctor = (state, id) => state.doctors[id];

/**
 * 
 * @param {object} state - the full state, where doctors is a property
 * @param {string} id - the id of the doctor
 */
export const getDoctorReviewIds = (state, id) => state.doctors[id].reviewIds;

/**
 * 
 * @param {object} state - the full state, where reviews is a property
 * @param {string} id - the id of the review
 */
export const getDoctorReviews = (state, id) => getDoctorReviewIds(state, id).map((id) => state.reviews[id]);

/**
 * 
 * @param {object} state - the full state, where reviews is a property
 * @param {string} id - the id of the review
 */
export const getReview = (state, id) => state.reviews[id];
