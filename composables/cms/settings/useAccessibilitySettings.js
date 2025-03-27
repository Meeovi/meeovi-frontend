import { ref, watch } from 'vue'

export function useAccessibilitySettings() {
  const highContrast = ref(false)
  const fontSize = ref(16)

  // Load settings from localStorage on initialization
  if (process.client) {
    const savedSettings = localStorage.getItem('accessibilitySettings')
    if (savedSettings) {
      const { highContrast: savedHighContrast, fontSize: savedFontSize } = JSON.parse(savedSettings)
      highContrast.value = savedHighContrast
      fontSize.value = savedFontSize
    }
  }

  // Watch for changes and save to localStorage
  watch([highContrast, fontSize], () => {
    if (process.client) {
      localStorage.setItem('accessibilitySettings', JSON.stringify({
        highContrast: highContrast.value,
        fontSize: fontSize.value
      }))
    }
  }, { deep: true })

  // Apply settings to the document
  const applySettings = () => {
    if (process.client) {
      document.body.style.fontSize = `${fontSize.value}px`
      document.body.classList.toggle('high-contrast', highContrast.value)
    }
  }

  // Call applySettings initially and whenever settings change
  watch([highContrast, fontSize], applySettings, { immediate: true })

  return {
    highContrast,
    fontSize,
    applySettings
  }
}
