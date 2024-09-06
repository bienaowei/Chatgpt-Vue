import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export function useBasicLayout() {
  const breakpoints = useBreakpoints(breakpointsTailwind)
  const isMobile = breakpoints.smaller('sm')

  return { isMobile }
}

// 使用vueuse获取当前屏幕尺寸是否满足返回true或false参考https://vueuse.org/core/useBreakpoints/
