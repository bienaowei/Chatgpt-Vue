import { ss } from '@/utils/storage'

const LOCAL_NAME = 'appSetting'

export type Theme = 'light' | 'dark' | 'auto'

export type Language = 'en-US' | 'zh-CN'

const languageMap: { [key: string]: Language } = {
  'en': 'en-US',
  'en-US': 'en-US',
  'zh': 'zh-CN',
  'zh-CN': 'zh-CN',
}

export interface AppState {
  // 左侧栏打开状态
  siderCollapsed: boolean
  // 主题颜色
  theme: Theme
  // 语言
  language: Language
}

// 默认值
export function defaultSetting(): AppState {
  const language = languageMap[navigator.language]
  return { siderCollapsed: false, theme: 'light', language }
}

// 获取LOCAL_NAME中对呀localStorage值
export function getLocalSetting(): AppState {
  const localSetting: AppState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

// 设置键为LOCAL_NAME值为setting的localStorage
export function setLocalSetting(setting: AppState): void {
  ss.set(LOCAL_NAME, setting)
}
