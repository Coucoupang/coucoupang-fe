import { ThemeProvider } from '@emotion/react';
import React from 'react';
import Theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import Button from './components/atomics/Button';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Button variant="primary">asd</Button>
    </ThemeProvider>
  );
}

export default App;
