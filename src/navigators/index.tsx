import React from 'react'
import { NavigationContainer, ParamListBase } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackScreenProps
} from '@react-navigation/native-stack'
import { Home } from '@/screens/home'
import { useTheme } from '@/hooks/useTheme'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Details } from '@/screens/details'
import { Country } from '@/types/country'

export interface RootStackParamList extends ParamListBase {
  Home: undefined
  Details: { country: Country }
}

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

export type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Details'
>

export function AppNavigator() {
  const { theme } = useTheme()

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerTintColor: theme.onPrimary,
          headerStyle: { backgroundColor: theme.primary },
          contentStyle: { backgroundColor: theme.background, padding: 20 },
          headerTitle: 'Where in the world?',
          headerTitleStyle: { fontSize: 18 },
          headerRight: () => <ThemeSwitcher />,
          animation: 'slide_from_right'
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Details" component={Details} />
      </Navigator>
    </NavigationContainer>
  )
}
