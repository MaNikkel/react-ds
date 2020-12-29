import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '.';

const TokenThemeProvider: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default TokenThemeProvider;
