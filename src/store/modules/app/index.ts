import { defineStore } from 'pinia'
import type { AppState, Language, Theme } from './helper'
import { defaultSetting, getLocalSetting, setLocalSetting } from './helper'
import { store } from '@/store/helper'

export const useAppStore = defineStore('app-store', {
  state: (): AppState => getLocalSetting(),
  actions: {
    setSiderCollapsed(collapsed: boolean) {
      this.siderCollapsed = collapsed
      this.recordState()
    },

    setTheme(theme: Theme) {
      this.theme = theme
      this.recordState()
    },

    setLanguage(language: Language) {
      if (this.language !== language) {
        this.language = language
        this.recordState()
      }
    },

    // 重置
    resetAppInfo() {
      this.$state = { ...defaultSetting() }
      this.recordState()
    },

    recordState() {
      setLocalSetting(this.$state)
    },
  },
})

export function useAppStoreWithOut() {
  return useAppStore(store)
}
