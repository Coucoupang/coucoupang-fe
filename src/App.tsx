import { ThemeProvider } from '@emotion/react';
import React from 'react';
import Theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import Button from './components/atomics/Button';
import TextField from './components/atomics/TextField';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Button variant="primary">asd</Button>
      <TextField variant="primary" />
    </ThemeProvider>
  );
}

export default App;
