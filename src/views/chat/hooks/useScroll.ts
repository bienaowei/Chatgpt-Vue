import type { Ref } from 'vue'
import { nextTick, ref } from 'vue'

type ScrollElement = HTMLDivElement | null

interface ScrollReturn {
  scrollRef: Ref
  scrollToBottom: () => Promise<void>
  scrollToTop: () => Promise<void>
  scrollToBottomIfAtBottom: () => Promise<void>
}

// 滚动元素的总高度（scrollHeight）
// 当前滚动条顶部的位置（scrollTop）
// 视口的高度（clientHeight）

export function useScroll(): ScrollReturn {
  const scrollRef = ref<ScrollElement>(null)

  // 回到底部
  const scrollToBottom = async () => {
    await nextTick()
    if (scrollRef.value)
      scrollRef.value.scrollTop = scrollRef.value.scrollHeight
  }

  // 回到顶部
  const scrollToTop = async () => {
    await nextTick()
    if (scrollRef.value)
      scrollRef.value.scrollTop = 0
  }

  // 这个函数可以在多个场景中使用，比如在聊天应用中，每当有新消息到来时，如果用户已经滚动到了聊天窗口的底部，就自动将滚动条滚动到最新消息的位置，以便用户无需手动滚动即可看到新消息
  const scrollToBottomIfAtBottom = async () => {
    await nextTick()
    if (scrollRef.value) {
      const threshold = 100 // Threshold, indicating the distance threshold to the bottom of the scroll bar.
      // distanceToBottom：这个值表示当前滚动条顶部到滚动元素底部的距离
      const distanceToBottom = scrollRef.value.scrollHeight - scrollRef.value.scrollTop - scrollRef.value.clientHeight
      if (distanceToBottom <= threshold)
        scrollRef.value.scrollTop = scrollRef.value.scrollHeight
    }
  }

  return {
    scrollRef,
    scrollToBottom,
    scrollToTop,
    scrollToBottomIfAtBottom,
  }
}
