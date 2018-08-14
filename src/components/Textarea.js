import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import * as color from "../styled/colors";

const Textarea = styled.textarea`
  width: 100%;
  height: 5em;
  padding: 0.5em;
  font-size: 1rem;
  position: relative;

  ${props =>
    props.validationError &&
    css`
      &::after {
        content: "X";
        content: "\\02192";
        display: block;
        font-size: 2rem;
        color: ${color.mediumaquamarine};
        color: black;
        position: absolute;
        top: 1em;
        right: 1em;
        z-index: 2;
      }
    `};
`;

Textarea.propTypes = {
  validationError: PropTypes.bool
};

export default Textarea;
