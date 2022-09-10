const { createGlobalStyle } = require('styled-components')

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Barlow Condensed', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 20px 40px;
    
    @media screen and (max-width: 800px){
      padding: 10px
    } 
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas,
      'Courier New', monospace;
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }
`
