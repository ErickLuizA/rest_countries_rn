import { RootStackParamList } from '@/navigators'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
