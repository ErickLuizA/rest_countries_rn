import React, { useState } from 'react'
import { View } from 'react-native'
import { Filter } from '@/screens/home/components/Filter'
import { CountriesList } from '@/screens/home/components/CountriesList'
import { Search } from '@/screens/home/components/Search'

export function Home() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')

  return (
    <View>
      <Search search={search} onSearch={setSearch} />
      <Filter filter={filter} onFilter={setFilter} />
      <CountriesList search={search} filter={filter} />
    </View>
  )
}
