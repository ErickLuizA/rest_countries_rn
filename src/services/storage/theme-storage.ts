import AsyncStorage from '@react-native-async-storage/async-storage'

const THEME_KEY = '@CountriesRN/ThemeKey'

export async function setTheme(item: string) {
  await AsyncStorage.setItem(THEME_KEY, item)
}

export async function getTheme() {
  return await AsyncStorage.getItem(THEME_KEY)
}
