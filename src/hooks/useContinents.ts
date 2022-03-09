import { ApolloError, gql, useQuery } from '@apollo/client'
import { Continent } from '@/types/continent'

const GET_CONTINENTS_QUERY = gql`
  query getContinents {
    continents {
      name
    }
  }
`

interface IContinentsData {
  continents: Continent[]
}

interface IUseContinents {
  data: IContinentsData | undefined
  loading: boolean
  error: ApolloError | undefined
}

export function useContinents(): IUseContinents {
  const { data, loading, error } =
    useQuery<IContinentsData>(GET_CONTINENTS_QUERY)

  return { data, loading, error }
}
