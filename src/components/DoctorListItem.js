import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import DoctorBadge from "./DoctorBadge";
import Avatar from "./Avatar";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em;
  border-bottom: 1px solid darkgrey;
  justify-content: space-between;

  ${props =>
    props.current &&
    css`
      background-color: rgb(217, 240, 235);
    `};
`;

const StyledInfo = styled.div`
  padding: 0 1rem;
  line-height: 1.5;
  flex-grow: 1;

  & > h2 {
    color: mediumaquamarine;
    font-size: 1rem;
    margin: 0;
    padding-bottom: 0.25em;
  }

  & > p {
    margin-top: 0;
  }
`;

const StyledArrow = styled.div`
  flex: 0 0 30px;
  color: mediumaquamarine;
  font-size: 2rem;

  & a {
    text-decoration: none;
  }
`;

const DoctorListItem = props => {
  const { avatarUrl, name, rating, address, reviewCount, type } = props.doctor;

  return (
    <StyledContainer current={props.isCurrent}>
      <Avatar url={avatarUrl} />
      <StyledInfo>
        <h2>{name}</h2>
        <p>
          <DoctorBadge badge={rating}>{rating}</DoctorBadge> {type}
          <br />
          {address.street}
          <br />
          {reviewCount} Reviews
        </p>
      </StyledInfo>
      <StyledArrow>
        <Link to={`/doctor/${props.doctor.id}/`}>&rarr;</Link>
      </StyledArrow>
    </StyledContainer>
  );
};

DoctorListItem.propTypes = {
  doctor: PropTypes.shape({
    avatarUrl: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.string,
    address: PropTypes.shape({
      street: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zip: PropTypes.number
    }),
    reviewCount: PropTypes.number,
    type: PropTypes.string
  }),
  isCurrent: PropTypes.bool
};

export default DoctorListItem;
