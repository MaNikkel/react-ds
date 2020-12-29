import ThemeTokenProvider from '../src/Themes/ThemeTokenProvider'
import React from 'react';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <ThemeTokenProvider>
      <Story />
    </ThemeTokenProvider>
  )
]
