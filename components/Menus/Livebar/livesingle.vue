<template>
    <div>
        <v-row>
            <v-col cols="6"><video :src="`${$directus.url}assets/${short.video.filename_disk}`" :title="short.name" autoplay controls></video></v-col>
            <v-col cols="6">
                <comments />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import comments from '../../user/comments.vue'

export default {
    components: { comments },
}
</script>

<script setup>
const { $directus, $readItem } = useNuxtApp()
const route = useRoute()

const { data: short } = await useAsyncData('short', () => {
  return $directus.request(
    $readItem('shorts', route.params.slug, {
      fields: ['*', { '*': ['*'] }]
    })
  )
})
</script>