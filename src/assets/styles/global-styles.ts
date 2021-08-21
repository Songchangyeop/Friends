import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle` ${normalize}
  
  

  *{
    box-sizing: border-box;
    @font-face {
		font-family: 'Cafe24Oneprettynight';
		src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Oneprettynight.woff')
			format('woff');
		font-weight: normal;
		font-style: normal;
	}
  }
`;

export default GlobalStyle;
