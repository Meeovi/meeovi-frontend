<template>
    <div>
        <div v-html="page?.content"></div>
    </div>
</template>

<script setup>
import { useGateway } from '../composables/useGateway'
import { useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute()
const gateway = useGateway()
const content = gateway.content

const page = ref(null)

async function fetchPage() {
  const result = await content.readItems('pages', {
    filter: {
      slug: {
        _eq: `${route.params.slug}`
      }
    },
    fields: ['*'],
    limit: 1
  })
  page.value = Array.isArray(result) ? result[0] : null
}

await fetchPage()

watch(() => route.params.slug, async () => {
  await fetchPage()
})

useHead({
  title: () => page.value?.name || 'Page',
})
</script>