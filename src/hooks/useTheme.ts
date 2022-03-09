import { ThemeContext } from '@/providers/theme-provider'
import { useContext } from 'react'

export function useTheme() {
  return useContext(ThemeContext)
}
