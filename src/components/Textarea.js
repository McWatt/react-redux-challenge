import styled, {css} from 'styled-components';

const Textarea = styled.textarea`
  width: 100%;
  height: 5em;
  padding: .5em;
  font-size: 1rem;
  position: relative;

  ${props => props.validationError && css`
    &::after {
        content: 'X';
        content: '\\02192';
        display: block;
        font-size: 2rem;
        color: mediumaquamarine;
        color: black;
        position: absolute;
        top: 1em;
        right: 1em;
        z-index: 2;
    }
  `}
`;
export default Textarea;