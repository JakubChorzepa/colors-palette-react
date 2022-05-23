const theme = {
  font: {
    family: "'Ubuntu Mono', monospace",
    size: {
      xs: '14px',
      s: '20px',
      m: '30px',
      l: '40px',
      xl: '60px'
    }
  },
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