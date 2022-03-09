import React, { useEffect, createContext, ReactNode, useState } from 'react'
import { useColorScheme } from 'react-native'
import { dark, light, Theme } from '@/constants/theme'
import {
  getTheme,
  setTheme as setStorageTheme
} from '@/services/storage/theme-storage'

interface IThemeProviderPROPS {
  children: ReactNode
}

interface IThemeContext {
  theme: Theme
  handleToggleTheme: () => void
}

const themeMapping: { [index: string]: Theme } = {
  light: light,
  dark: dark
}

export const ThemeContext = createContext({} as IThemeContext)

export function ThemeProvider({ children }: IThemeProviderPROPS) {
  const colorScheme = useColorScheme()

  const [theme, setTheme] = useState(themeMapping[colorScheme ?? 'dark'])

  function handleToggleTheme() {
    setStorageTheme(theme.isDark ? 'light' : 'dark')

    setTheme(state => (state.isDark ? themeMapping.light : themeMapping.dark))
  }

  useEffect(() => {
    getTheme()
      .then(value => {
        if (value) {
          setTheme(themeMapping[value])
        }
      })
      .catch()
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
