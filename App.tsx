import React from 'react'
import { AppNavigator } from '@/navigators'
import { ApolloProvider } from '@/providers/apollo-provider'
import { ThemeProvider } from '@/providers/theme-provider'

export function App() {
  return (
    <ApolloProvider>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </ApolloProvider>
  )
}
