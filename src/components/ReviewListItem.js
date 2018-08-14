import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledReview = styled.div`
  padding: 1rem;
  position: relative;
`;

const StyledEditButton = styled.div`
  padding: 1rem;
  font-size: 0.75rem;
  position: absolute;
  top: 0;
  right: 0;
`;

const ReviewListItem = props => {
  const { userName, timestamp, content } = props.review;
  const editPath = `/doctor/${props.doctorId}/review/${props.review.id}`;

  return (
    <StyledReview>
      <time>{timestamp}</time>
      <h2>{userName}</h2>
      <p>{content}</p>
      <StyledEditButton>
        <Link to={editPath}>Edit</Link>
      </StyledEditButton>
    </StyledReview>
  );
};

ReviewListItem.propTypes = {
  review: PropTypes.shape({
    userName: PropTypes.string,
    timestamp: PropTypes.string,
    content: PropTypes.string,
    id: PropTypes.string
  }),
  doctorId: PropTypes.string
};

export default ReviewListItem;
