import styled, { css } from 'styled-components';

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background-color: mediumaquamarine;
  color: white;
  border: 2px solid mediumaquamarine;
  font-weight: normal;

  ${props => props.danger && css`
    background-color: white;
    color: salmon;
    border-color: salmon;
  `}

  ${props => props.disabled && css`
    background-color: lightgrey;
    color: white;
    border: 2px solid darkgrey;
  `}

  ${props => props.large && css`
    font-size: 1rem;
    padding: .5rem 1rem;
  `}

  ${props => props.next && css`
    &::after {
        content: '\\02192';
        display: inline-block;
        font-size: 2rem;
        vertical-align: middle;
    }
  `}
`;

export default Button;