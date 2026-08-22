import type { DirectiveBinding } from 'vue'

function sanitizeHtml(input: unknown): string {
  const raw = String(input ?? '')
  // Basic in-place sanitizer: strips script tags and inline event handlers.
  return raw
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .replace(/\son\w+\s*=\s*(['"]).*?\1/gi, '')
    .replace(/\sjavascript:/gi, '')
}

export default defineNuxtPlugin((nuxtApp) => {
  (nuxtApp.vueApp as any).directive('dompurify-html', {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
      el.innerHTML = sanitizeHtml(binding.value)
    },
    updated(el: HTMLElement, binding: DirectiveBinding) {
      el.innerHTML = sanitizeHtml(binding.value)
    },
    getSSRProps(binding: DirectiveBinding) {
      return {
        innerHTML: sanitizeHtml(binding?.value),
      }
    },
  })
})
