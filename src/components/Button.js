import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import * as color from "../styled/colors";

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background-color: ${color.mediumaquamarine};
  color: white;
  border: 2px solid ${color.mediumaquamarine};
  font-weight: normal;

  ${props =>
    props.danger &&
    css`
      background-color: white;
      color: ${color.salmon};
      border-color: ${color.salmon};
    `}

  ${props =>
    props.disabled &&
    css`
      background-color: ${color.lightgrey};
      color: white;
      border: 2px solid ${color.darkgrey};
    `}

  ${props =>
    props.large &&
    css`
      font-size: 1rem;
      padding: 0.5rem 1rem;
    `}

  ${props =>
    props.next &&
    css`
      &::after {
        content: "\\02192";
        display: inline-block;
        font-size: 2rem;
        vertical-align: middle;
      }
    `}
`;

Button.propTypes = {
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  large: PropTypes.bool,
  next: PropTypes.bool
};

export default Button;
