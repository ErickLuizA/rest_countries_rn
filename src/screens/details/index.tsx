import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { DetailsScreenProps } from '@/navigators'
import { ItemList } from '@/screens/details/components/ItemList'
import { typography } from '@/constants/theme'
import { useTheme } from '@/hooks/useTheme'

export function Details() {
  const { theme } = useTheme()
  const {
    params: { country }
  } = useRoute<DetailsScreenProps['route']>()

  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.flag}> {country.emoji} </Text>

        <View>
          <Text style={[typography.headingText, { color: theme.onBackground }]}>
            {' '}
            {country.name}{' '}
          </Text>
          <Text style={[typography.text, { color: theme.onBackground }]}>
            {' '}
            {country.continent.name}{' '}
          </Text>
        </View>
      </View>

      <Text
        style={[typography.text, styles.margin, { color: theme.onBackground }]}
      >
        <Text style={typography.boldText}>Native: </Text>
        {country.native}
      </Text>

      <Text
        style={[typography.text, styles.margin, { color: theme.onBackground }]}
      >
        <Text style={typography.boldText}>Capital: </Text>
        {country.capital}
      </Text>

      <Text
        style={[typography.text, styles.margin, { color: theme.onBackground }]}
      >
        <Text style={typography.boldText}>Phone: </Text>
        {country.phone}
      </Text>

      <Text
        style={[typography.text, styles.margin, { color: theme.onBackground }]}
      >
        <Text style={typography.boldText}>Currency: </Text>
        {country.currency}
      </Text>

      <View style={styles.separator} />

      {!!country.languages.length && (
        <ItemList data={country.languages} title="Languages" />
      )}

      {!!country.states.length && (
        <ItemList data={country.states} title="States" />
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {},

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },

  flag: {
    fontSize: 50,
    marginRight: 12
  },

  margin: {
    marginVertical: 4
  },

  separator: { height: 10 }
})
