import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import theme from './Themes';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="outline">Botão</Button>
    </ThemeProvider>
  );
}

export default App;
