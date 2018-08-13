import styled, { css } from 'styled-components';

const TextButton = styled.button`
    border: none;
    background-color: none;
    cursor: pointer;
    display: inline-block;

  ${props => props.disabled && css`
    color: lightgrey;
    font-style: italic;
  `}
`;

export default TextButton;