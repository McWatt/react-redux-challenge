import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const DoctorBadge = styled.span`
  border-radius: 0.25em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  background-color: white;
  color: darkgrey;
  border: 1px solid darkgrey;
  display: inline-block;
  font-size: .75rem;
  text-transform: uppercase;

  ${props => props.badge === 'high' && css`
    background-color: salmon;
    color: white;
    border-color: salmon;
  `}

  ${props => props.badge === 'fair' && css`
    background-color: darkgrey;
    color: white;
    border-color: darkgrey;
  `}

  ${props => props.badge === 'low' && css`
    background-color: mediumaquamarine;
    color: white;
    border-color: mediumaquamarine;
  `}
`;

DoctorBadge.propTypes = {
  badge: PropTypes.string,
}

export default DoctorBadge;