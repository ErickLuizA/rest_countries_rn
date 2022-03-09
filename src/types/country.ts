import { Continent } from '@/types/continent'
import { Language } from '@/types/language'
import { State } from '@/types/state'

export interface Country {
  code: string
  name: string
  native: string
  capital: string
  emoji: string
  currency: string
  phone: string
  states: State[]
  continent: Continent
  languages: Language[]
}
