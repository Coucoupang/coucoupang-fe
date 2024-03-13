import { ThemeProvider } from '@emotion/react';
import React from 'react';
import Theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
