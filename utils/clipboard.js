import { useClipboardItems } from '@vueuse/core'

const mime = 'text/plain'
const source = ref([
  new ClipboardItem({
    [mime]: new Blob(['plain text'], { type: mime }),
  })
])

const { content, copy, copied, isSupported } = useClipboardItems({ source })