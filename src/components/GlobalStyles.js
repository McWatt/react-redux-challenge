import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

injectGlobal`
  ${styledNormalize}
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-size: 16px;
    color: darkgrey;
  }

  /* base */
  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }

  a {
    color: mediumaquamarine;
  }

  textarea, input {
    color: darkgrey;
  }

  ::placeholder {
    color: mediumaquamarine;
  }
`;