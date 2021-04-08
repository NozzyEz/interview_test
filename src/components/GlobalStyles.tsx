import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: none;
  }

  html {
    font-size: 62.5%
  }

  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 3.5rem;
  }
  h3 {
    font-size: 2.5rem;
  }
  h4 {
    font-size: 2.3rem;
  }
  p {
    font-size: 1.8rem;
  }
  code {
    font-size: 1.5rem;
  }
`;

export default GlobalStyles;
