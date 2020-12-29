import React from 'react';
import Button from './components/Button';
import TokenThemeProvider from './Themes/ThemeTokenProvider';

function App(): JSX.Element {
  return (
    <TokenThemeProvider>
      <Button variant="primary">Botão</Button>
    </TokenThemeProvider>
  );
}

export { TokenThemeProvider };
export default App;
