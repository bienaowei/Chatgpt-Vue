import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQczEgDqYNj9EVnTCvQSJ2Ymxu_9cKQIIk4KNErZsFaFyeqCFo_oYg8Rdet0Q&s',
      name: 'KunKun AI',
      description: 'AI Assistant',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
