<template>
  <div>
    <div v-for="(media, index) in blocksBlog?.media" :key="index">
    <section data-bs-version="5.1" class="info3 cid-skeBLZoXmf" id="info3-7" :style="`background-image: url(${getAssetUrl(media?.file || media)})`">
      <div class="mbr-overlay" style="opacity: 0.6; background-color: rgb(68, 121, 217);">
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="card col-12 col-lg-10">
            <div class="card-wrapper">
              <div class="card-box align-center">
                <h4 class="card-title mbr-fonts-style align-center mb-4 display-1">
                  <strong>{{ blocksBlog?.name }}</strong></h4>
                <p class="mbr-text mbr-fonts-style mb-4 display-7" v-dompurify-html="blocksBlog?.description"></p>
                <div class="mbr-section-btn mt-3"><NuxtLink class="btn btn-warning display-4" :to="`${blocksBlog?.content?.[0]?.url}`">{{ blocksBlog?.content?.[0]?.url_name }}</NuxtLink></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  </div>
</template>

<script setup>
  import { useDirectusUrl } from '#imports'

  const directusUrl = useDirectusUrl()
  const getAssetUrl = (file) => {
    const fileId = file?.id || file?.directus_files_id?.id || file?.filename_disk || file
    if (!fileId || !directusUrl) return ''
    return `${directusUrl.replace(/\/$/, '')}/assets/${fileId}`
  }

    const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: blocksBlog
    } = await useAsyncData('blocksBlog', async () => {
        try {
        return await $directus.request($readItem('page_blocks', '3', {
                fields: ['*', 'media.*.*'],
        }))
        } catch {
            return null
        }
    })
</script>