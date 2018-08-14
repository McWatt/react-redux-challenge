import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import * as color from "../styled/colors";

const Input = styled.input.attrs({
  type: props => props.type || "text"
})`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  position: relative;

  ${props =>
    props.icon &&
    css`
      padding-left: 2em;
    `} ${props =>
    props.validationError &&
    css`
      &::after {
        content: "X";
        display: block;
        font-size: 2rem;
        color: ${color.mediumaquamarine};
        position: absolute;
        top: 1em;
        right: 1em;
        z-index: 2;
      }
    `};
`;

Input.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.string,
  validationError: PropTypes.bool
};

export default Input;
