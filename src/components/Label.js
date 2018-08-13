import styled, { css } from 'styled-components';

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
export default Label;