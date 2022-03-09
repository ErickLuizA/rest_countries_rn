import { StyleProp, TextStyle } from 'react-native'

export type Theme = {
  primary: string
  primaryVariant: string
  onPrimary: string
  background: string
  onBackground: string
  isDark: boolean
}

export const dark = {
  primary: '#1E293B',
  primaryVariant: '#2c3c56',
  onPrimary: '#CBD5E1',
  background: '#0F172A',
  onBackground: '#CBD5E1',
  isDark: true
}

export const light = {
  primary: '#E2E8F0',
  primaryVariant: '#dbe3ec',
  onPrimary: '#374151',
  background: '#CBD5E1',
  onBackground: '#2c3c56',
  isDark: false
}

export const typography: {
  text: StyleProp<TextStyle>
  headingText: StyleProp<TextStyle>
  boldText: StyleProp<TextStyle>
} = {
  text: {
    fontSize: 18
  },
  headingText: {
    fontSize: 20
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 18
  }
}
