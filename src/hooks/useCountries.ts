import { ApolloError, gql, useQuery } from '@apollo/client'
import { Country } from '@/types/country'

const GET_COUNTRIES_QUERY = gql`
  query getCountries {
    countries {
      code
      name
      native
      capital
      emoji
      currency
      phone
      states {
        code
        name
      }
      continent {
        code
        name
      }
      languages {
        code
        name
      }
    }
  }
`

interface ICountriesData {
  countries: Country[]
}

interface IUseCountries {
  data: ICountriesData | undefined
  loading: boolean
  error: ApolloError | undefined
}

interface IUseCountriesParams {
  isSearching: boolean
  searchQuery: string

  isFiltering: boolean
  filter: string
}

export function useCountries({
  isSearching,
  searchQuery,
  isFiltering,
  filter
}: IUseCountriesParams): IUseCountries {
  const { data, loading, error } = useQuery<ICountriesData>(GET_COUNTRIES_QUERY)

  const searchedData: ICountriesData = {
    countries: isSearching
      ? data?.countries.filter(val =>
          val.name.toLowerCase().includes(searchQuery.toLowerCase())
        ) ?? []
      : []
  }

  const filteredData = {
    countries: isFiltering
      ? data?.countries.filter(
          val => val.continent.name.toLowerCase() === filter.toLowerCase()
        ) ?? []
      : []
  }

  const filteredAndSearchedData = {
    countries:
      isFiltering && isSearching
        ? data?.countries.filter(
            val =>
              val.continent.name.toLowerCase() === filter.toLowerCase() &&
              val.name.toLowerCase().includes(searchQuery.toLowerCase())
          ) ?? []
        : []
  }

  return {
    data:
      isFiltering && isSearching
        ? filteredAndSearchedData
        : isSearching
        ? searchedData
        : isFiltering
        ? filteredData
        : data,
    loading,
    error
  }
}
