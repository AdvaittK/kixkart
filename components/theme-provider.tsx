'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider 
      {...props} 
      defaultTheme="dark" 
      enableSystem={false} 
      enableColorScheme={true}
      forcedTheme="dark" // This forces the theme to always be dark
    >
      {children}
    </NextThemesProvider>
  )
}
