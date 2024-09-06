// 定义localStorage的值参数
interface StorageData<T = any> {
  data: T
  expire: number | null
}

export function createLocalStorage(options?: { expire?: number | null }) {
  // 设置7天有效期
  const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7

  const { expire } = Object.assign({ expire: DEFAULT_CACHE_TIME }, options)

  function set<T = any>(key: string, data: T) {
    const storageData: StorageData<T> = {
      data,
      expire: expire !== null ? new Date().getTime() + expire * 1000 : null,
    }

    const json = JSON.stringify(storageData)
    window.localStorage.setItem(key, json)
  }

  function get(key: string) {
    const json = window.localStorage.getItem(key)
    if (json) {
      let storageData: StorageData | null = null

      try {
        storageData = JSON.parse(json)
      }
      catch {
        // Prevent failure
      }

      if (storageData) {
        const { data, expire } = storageData
        if (expire === null || expire >= Date.now())
          return data
      }

      remove(key)
      return null
    }
  }

  // 通过键名称删除对应localStorage
  function remove(key: string) {
    window.localStorage.removeItem(key)
  }

  // 清空所有localStorage
  function clear() {
    window.localStorage.clear()
  }

  return { set, get, remove, clear }
}
// ls是一个通过调用createLocalStorage()（无参数）创建的实例，它使用默认的过期时间（7天）。
export const ls = createLocalStorage()

// ss是一个通过调用createLocalStorage({ expire: null })创建的实例，它不会为存储的数据设置过期时间。这意味着所有通过ss实例存储的数据都不会自动过期。
export const ss = createLocalStorage({ expire: null })
