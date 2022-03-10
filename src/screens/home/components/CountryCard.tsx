import React, { useEffect, useRef } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Animated,
  Dimensions
} from 'react-native'
import { typography } from '@/constants/theme'
import { useTheme } from '@/hooks/useTheme'
import { Country } from '@/types/country'
import { useNavigation } from '@react-navigation/native'

const AnimatedTouchableHighlight =
  Animated.createAnimatedComponent(TouchableHighlight)

const { width } = Dimensions.get('screen')

interface ICountryCardProps {
  item: Country
  itemIndex: number
}

export function CountryCard({ item, itemIndex }: ICountryCardProps) {
  const { theme } = useTheme()
  const { navigate } = useNavigation()

  const position = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.spring(position, {
      toValue: 1,
      delay: itemIndex * 200,
      useNativeDriver: false
    }).start()
  }, [position, itemIndex])

  return (
    <AnimatedTouchableHighlight
      onPress={() => navigate('Details', { country: item })}
      underlayColor={theme.background}
      style={[
        styles.container,
        {
          backgroundColor: theme.primary,
          transform: [
            {
              translateX: position.interpolate({
                inputRange: [0, 1],
                outputRange: [-width, 0]
              })
            },
            {
              rotateZ: position.interpolate({
                inputRange: [0, 1],
                outputRange: ['20deg', '0deg']
              })
            }
          ]
        }
      ]}
      key={item.code}
    >
      <>
        <View style={styles.row}>
          <Text style={styles.flag}>{item.emoji}</Text>

          <View>
            <Text style={[typography.headingText, { color: theme.onPrimary }]}>
              {item.name}
            </Text>
            <Text style={[typography.text, { color: theme.onPrimary }]}>
              {item.continent.name}
            </Text>
          </View>
        </View>

        <Text style={[typography.text, { color: theme.onPrimary }]}>
          <Text style={[typography.boldText, { color: theme.onPrimary }]}>
            Capital:{' '}
          </Text>
          {item.capital}
        </Text>

        <View style={styles.languagesContainer}>
          <Text style={[typography.boldText, { color: theme.onPrimary }]}>
            Languages:{' '}
          </Text>
          {item.languages.map((language, index) => (
            <Text
              key={language.code}
              style={[
                styles.languageCard,
                typography.text,
                {
                  color: theme.onPrimary,
                  backgroundColor: theme.background,
                  marginRight: index === item.languages.length - 1 ? 0 : 4
                }
              ]}
            >
              {language.name}
            </Text>
          ))}
        </View>
      </>
    </AnimatedTouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  flag: {
    fontSize: 46,
    marginRight: 12
  },

  languagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 4
  },

  languageCard: {
    padding: 4,
    marginBottom: 4
  }
})
