import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
background: linear-gradient(90deg, rgba(34,193,195,0.4) , rgba(253,187,45,0.2));
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
p{
  color: red;
  font-size: 26px;
  display: block;
  text-align: center;
  
}
`;

export default GlobalStyle;
