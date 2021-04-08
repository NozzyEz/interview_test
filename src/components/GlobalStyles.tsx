import {createGlobalStyle} from 'styled-components';
import FjellaOne from '../fonts/FjallaOne-Regular.ttf';

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'FjellaOne';
  src: url(${FjellaOne});
}
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
    font-family: 'FjellaOne';
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
    color: #000;
    display:block
  }
  button {
    padding: 1.2rem 3rem;
    margin: 0rem 0.5rem;
    font-weight: bolder;
    border: none;
    background-color: #e06c2e;
    transition: all 0.3s ease-in-out;
    color: #fff;
    &:hover {
    color: #e06c2e;
    background-color: #fff;
    }
    &:focus {
      outline: #fff 1px solid
    }
  }
`;

export default GlobalStyles;
