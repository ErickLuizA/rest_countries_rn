import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from '@/components/Icon'
import { useTheme } from '@/hooks/useTheme'

interface IThemeSwitcherProps {}

export function ThemeSwitcher({}: IThemeSwitcherProps) {
  const { handleToggleTheme, theme } = useTheme()

  return (
    <TouchableOpacity onPress={handleToggleTheme} style={styles.container}>
      <Icon
        name={theme.isDark ? 'brightness-7' : 'brightness-2'}
        style={{ color: theme.onPrimary, transform: [{ rotate: '150deg' }] }}
      />
      <Text style={{ color: theme.onPrimary }}>
        {' '}
        {theme.isDark ? 'Light Mode' : 'Dark Mode'}{' '}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
