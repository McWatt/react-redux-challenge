import styled, { css } from 'styled-components';

const Input = styled.input.attrs({
  type: props => props.type || 'text',
})`
  width: 100%;
  padding: .5rem;
  font-size: 1rem;
  position: relative;

  ${props => props.icon && css`
    padding-left: 2em;
  `}

  ${props => props.validationError && css`
    &::after {
        content: 'X';
        display: block;
        font-size: 2rem;
        color: mediumaquamarine;
        position: absolute;
        top: 1em;
        right: 1em;
        z-index: 2;
    }
  `}
`;

export default Input;