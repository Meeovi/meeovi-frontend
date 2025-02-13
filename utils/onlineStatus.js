import { useOnline } from '@vueuse/core'
import { computed } from 'vue'

const online = useOnline()

const statusDot = computed(() => ({
  backgroundColor: online.value ? '#22c55e' : '#94a3b8', // green for online, gray for offline
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  display: 'inline-block'
}))

const text = computed(() => online.value ? 'Online' : 'Offline')

export default {
  online,
  statusDot,
  text
}
