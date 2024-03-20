import { ThemeProvider } from '@emotion/react';
import React from 'react';
import Theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import SingUpTemplate from './components/templates/SignUpTemplate';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <SingUpTemplate />
    </ThemeProvider>
  );
}

export default App;
