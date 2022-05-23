import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
// import styled from 'styled-components';
import { theme } from './assets/styles/theme';
import { GlobalStyles } from "./assets/styles/GlobalStyles";
// import { Button } from "./components/Button/Button";
import ColorsSection from "./components/ColorsSection/ColorsSection";

// const StyledButton = styled(Button)`
//   width: 150px;
//   height: 50px;
//   font-size: 20px;
// `;

export type ColorsType = {
    id: number,
    hexCode: string,
    isLocked: boolean,
}

const initialColors: ColorsType[] = [
  {
    id: 0,
    hexCode: '#BDE0FE',
    isLocked: false
  },
  {
    id: 1,
    hexCode: '#FFAFCC',
    isLocked: false
  },
  {
    id: 2,
    hexCode: '#CDB4DB',
    isLocked: false
  },
  {
    id: 3,
    hexCode: '#A2D2FF',
    isLocked: false
  }
]

const App = () => {
  const [colors, setColors] = useState<ColorsType[]>([]);

  useEffect(() => {
    setColors( () => initialColors );
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ColorsSection colors={colors}/>
    </ThemeProvider>
  );
}

export default App;
