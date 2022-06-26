import { useThrottleFn } from '@vueuse/core'
import { onMounted, onUnmounted, ref } from 'vue'

export const useWindowResize = () => {
  // States
  const height = ref(window.innerHeight)
  const width = ref(window.innerWidth)

  // Variables
  const realTimeLatency = 13

  // Methods
  const update = useThrottleFn(() => {
    height.value = window.innerHeight
    width.value = window.innerWidth
  }, realTimeLatency)

  // Hooks
  onMounted(() => window.addEventListener('resize', update))
  onUnmounted(() => window.removeEventListener('resize', update))

  return { height, width }
}
