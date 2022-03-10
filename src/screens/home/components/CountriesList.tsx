import React from 'react'
import { View, StyleSheet, FlatList, ListRenderItem } from 'react-native'
import { ShimmerPlaceholder } from '@/components/ShimmerPlaceholder'
import { useCountries } from '@/hooks/useCountries'
import { CountryCard } from '@/screens/home/components/CountryCard'
import { Country } from '@/types/country'

interface ICountriesListProps {
  search: string
  filter: string
}

const renderItem: ListRenderItem<Country> | null | undefined = ({
  item,
  index
}) => <CountryCard item={item} itemIndex={index} />

export function CountriesList({ search, filter }: ICountriesListProps) {
  const { data, loading } = useCountries({
    searchQuery: search,
    isSearching: search.trim().length > 0,
    filter,
    isFiltering: !!filter
  })

  if (loading) {
    return (
      <FlatList
        data={new Array(10).fill(0)}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={() => <ShimmerPlaceholder height={100} />}
      />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={data?.countries}
        getItemLayout={(_, index) => ({
          index,
          length: 100,
          offset: 100 * index
        })}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  separator: {
    height: 10
  }
})
