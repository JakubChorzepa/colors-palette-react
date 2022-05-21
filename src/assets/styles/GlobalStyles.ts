import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    background: ${ ({ theme: { colors } }) => colors.background};
    margin: 0;
    padding: 0;
  }


`;