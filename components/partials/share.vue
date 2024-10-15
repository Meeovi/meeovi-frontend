<template>
  <div class="sharethis-inline-share-buttons"></div>
</template>

<script>
import 'dotenv'

export default {
  mounted() {
    const st = window.__sharethis__
    if (!st) {
      const script = document.createElement('script')
      script.src =
        `https://platform-api.sharethis.com/js/sharethis.js#property=${process.env.NUXT_PROJECT_ID}&product=sticky-share-buttons`
      document.body.appendChild(script)
    } else if (typeof st.initialize === 'function') {
      st.href = window.location.href
      st.initialize()
    }
  }
}
</script>