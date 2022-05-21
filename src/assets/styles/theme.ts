const theme = {
  colors: {
    background: '#FFFDFA',
    button: '#3367EC'
  }
}

type TypeTheme = typeof theme;

declare module "styled-components" {
  interface DefaultTheme extends TypeTheme {}
}

export { theme };