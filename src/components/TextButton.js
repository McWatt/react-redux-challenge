import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const TextButton = styled.button`
  border: none;
  background-color: none;
  cursor: pointer;
  display: inline-block;

  ${props =>
    props.disabled &&
    css`
      color: lightgrey;
      font-style: italic;
    `};
`;

TextButton.propTypes = {
  disabled: PropTypes.bool
};

export default TextButton;
