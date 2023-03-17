import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    
    body {
  margin: 0;
  font-family: Roboto, sans-serif;
  color: #212121;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color:inherit;
  cursor: pointer;
  &:focus {
    outline: none;
  }
}
`;
