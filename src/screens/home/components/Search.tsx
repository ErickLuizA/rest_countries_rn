import React from 'react'
import { View, StyleSheet, TextInput, TouchableHighlight } from 'react-native'
import { Icon } from '@/components/Icon'
import { useTheme } from '@/hooks/useTheme'

interface ISearchProps {
  search: string
  onSearch: (value: string) => void
}

export function Search({ search, onSearch }: ISearchProps) {
  const { theme } = useTheme()

  return (
    <View style={[styles.container, { backgroundColor: theme.primary }]}>
      <View style={styles.row}>
        <Icon name="search" color={theme.onPrimary} />
        <TextInput
          placeholder="Search for a country..."
          value={search}
          onChangeText={onSearch}
          placeholderTextColor={theme.onPrimary}
          style={{ color: theme.onPrimary }}
        />
      </View>

      {!!search.length && (
        <TouchableHighlight
          onPress={() => onSearch('')}
          underlayColor={theme.background}
        >
          <Icon name="clear" color={theme.onPrimary} />
        </TouchableHighlight>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  clear: {
    borderRadius: 50,
    padding: 4
  }
})
