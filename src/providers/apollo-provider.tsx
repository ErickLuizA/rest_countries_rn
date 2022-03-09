import React, { ReactNode } from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache()
})

interface IApolloProviderProps {
  children: ReactNode
}

export function ApolloProvider({ children }: IApolloProviderProps) {
  return <Provider client={client}>{children}</Provider>
}
