import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle` ${normalize}
  
  html,body {
    padding: 1em;
  }

  *{
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
