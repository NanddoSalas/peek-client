import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #202124;
  }
`;

export default GlobalStyle;
