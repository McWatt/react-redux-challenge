import { injectGlobal } from "styled-components";
import styledNormalize from "styled-normalize";
import * as color from "./colors";

injectGlobal`
  ${styledNormalize}
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    letter-spacing: .5px;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-size: 16px;
    color: ${color.darkgrey};
  }

  /* base */
  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }

  a {
    color: ${color.mediumaquamarine};
  }

  textarea, input {
    color: ${color.darkgrey};
  }

  ::placeholder {
    color: ${color.mediumaquamarine};
  }
`;
