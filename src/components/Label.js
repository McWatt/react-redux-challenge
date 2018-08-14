import styled, { css } from 'styled-components';
import PropTypes from "prop-types";

const Label = styled.label`
    position: relative;

    &::after {
        content: '\\02713';
        display: block;
        font-size: 1.75rem;
        color: mediumaquamarine;
        position: absolute;
        top: 0.75em;
        right: 0.25em;
    }
  ${props => props.validationError && css`
    &::after {
        color: grey;
    }
  `}
`;

Label.propTypes = {
    validationError: PropTypes.bool,
}

export default Label;