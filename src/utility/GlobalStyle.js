import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
}
ul,
li,
h1,
h2,
h3,
h4,
p,
button,
img {
  padding: 0;
  margin: 0;
  cursor: default;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
input {
    padding: 0;
}
  
`;

export default GlobalStyle;
