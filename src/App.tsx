import { ThemeProvider } from "styled-components";
import { theme } from './assets/styles/theme';
import { GlobalStyles } from "./assets/styles/GlobalStyles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
