import type { Ref } from 'vue'
import { useBase64 } from '@vueuse/core'
import { ref } from 'vue'

const text = ref('')
const file = ref() as Ref<File>
const image = ref() as Ref<HTMLImageElement>

const { base64: textBase64 } = useBase64(text)
const { base64: fileBase64 } = useBase64(file)
const { base64: imageBase64 } = useBase64(image)
const { base64: bufferBase64 } = useBase64(new ArrayBuffer(8))

function onFileInput(e: Event) {
  file.value = (e.target as HTMLInputElement).files![0]
}

export {
  text,
  textBase64,
  file,
  fileBase64,
  image,
  imageBase64,
  bufferBase64,
  onFileInput,
}
