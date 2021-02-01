import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {NavBar} from './components/NavBar';

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}
*,
*::before,
8::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  background-color: #f0f0f0;
  font-family: Roboto, sans-serif;
  color: black;
}
a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
  height: auto;
}

button {
  font-family: Roboto;
  font-size: 20px;
border-radius: 5px;
cursor: pointer;
align-items: center;
justify-content: center;
}

button:hover {
  background-color: salmon;
  color: white;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

h1, h2, h3 {
  font-family: Pacifico;
  padding: 0;
  margin: 0;
}

p {
  margin: 0;
  padding: 0;
}
`;

function App() {
  return (
 <>
    <GlobalStyle/>
    <NavBar/>
    </>
  );
}

export default App;
