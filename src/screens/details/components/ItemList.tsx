import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '@/hooks/useTheme'

interface IItemListProps {
  title: string
  data: { code: string; name: string }[]
}

export function ItemList({ data, title }: IItemListProps) {
  const { theme } = useTheme()

  return (
    <View style={styles.container}>
      <Text style={[styles.boldText, { color: theme.onBackground }]}>
        {title}:{' '}
      </Text>
      {data.map((item, index) => (
        <Text
          key={item.code ?? index}
          style={[
            styles.card,
            styles.text,
            {
              color: theme.onPrimary,
              backgroundColor: theme.primary,
              marginRight: index === data.length - 1 ? 0 : 4
            }
          ]}
        >
          {item.name}
        </Text>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 4
  },

  card: {
    padding: 4,
    marginBottom: 6
  },

  text: {
    fontSize: 16
  },

  boldText: {
    fontWeight: 'bold',
    fontSize: 16
  }
})
