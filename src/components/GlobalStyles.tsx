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

  body {
    background-color: #2f2f2f;
    color: #eaeaea;
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
  button {
    padding: 1.2rem 3rem;
    font-weight: bolder;
    border: none;
    background-color: #e06c2e;
    /* color: #282727; */
    color: #fff;
  }
`;

export default GlobalStyles;
