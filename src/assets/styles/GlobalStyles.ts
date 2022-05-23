import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    outline: 0;
    padding: 0;
    margin: 0;
  }
  
  body {
    background: ${ ({ theme: { colors } }) => colors.background};
    font-family: ${ ( { theme: { font } } ) => font.family };
    font-size: ${ ( { theme: { font } } ) => font.size.s };
    font-weight: 400;
    margin: 0;
    padding: 0;
  }


`;