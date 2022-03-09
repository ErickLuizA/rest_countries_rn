import React, { useEffect, useRef } from 'react'
import { StyleSheet, Animated, Dimensions } from 'react-native'
import { useTheme } from '@/hooks/useTheme'

const dimensions = Dimensions.get('screen')

interface IShimmerPlaceholderProps {
  width?: number
  height?: number
}

export function ShimmerPlaceholder({
  height,
  width
}: IShimmerPlaceholderProps) {
  const { theme } = useTheme()

  const animation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const sequence = Animated.sequence([
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false
      }),
      Animated.timing(animation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false
      })
    ])

    Animated.loop(sequence, {
      iterations: Infinity
    }).start()
  }, [animation])

  return (
    <Animated.View
      style={[
        styles.container,
        {
          height: height ?? 50,
          width: width ?? dimensions.width,
          backgroundColor: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [theme.primary, theme.primaryVariant]
          })
        }
      ]}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4
  }
})
