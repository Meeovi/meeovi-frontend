<template>
  <div>
    <BottomFooter />
    <Newsletter />
    <v-btn class="footertotopbtn" title="To the Top of the Page" prepend-icon="fas fa-arrow-up" rounded="0"
      href="#mainSection">Back to Top</v-btn>
    <section data-bs-version="5.1" class="footer3 cid-u4cbW5p2qg" once="footer" id="footer03-8b"
      data-sortbtn="btn-primary">
      <div class="container">
        <v-row class="align-left justify-content-center mbr-white">
          <v-col cols="4" class="md-pb">
            <h2 class="mbr-section-title pb-2 mbr-fonts-style display-7">
              <strong>{{ about?.name }}</strong></h2>
            <div v-for="child in about?.menus" :key="child.id">
              <h3 class="mbr-section-subtitle mbr-fonts-style mbr-lighter display-4"><NuxtLink
              :href="toPath(child?.slug)">{{ child?.name }}</NuxtLink></h3>
            </div>
          </v-col>
          <v-col cols="4" class="md-pb">
            <h2 class="mbr-section-title pb-2 mbr-fonts-style display-7">
              <strong>{{ legal?.name }}</strong></h2>
            <div v-for="child in legal?.menus" :key="child.id">
              <h3 class="mbr-section-subtitle mbr-fonts-style mbr-lighter display-4"><NuxtLink
              :href="toPath(child?.slug)">{{ child?.name }}</NuxtLink></h3>
            </div>
          </v-col>
          <v-col cols="4" class="md-pb">
            <h2 class="mbr-section-title pb-2 mbr-fonts-style display-7">
              <strong>{{ company?.name }}</strong></h2>
            <div v-for="child in company?.menus" :key="child.id">
              <h3 class="mbr-section-subtitle mbr-fonts-style mbr-lighter display-4"><NuxtLink
              :href="toPath(child?.slug)">{{ child?.name }}</NuxtLink></h3>
            </div>
          </v-col>
        </v-row>
      </div>
    </section>

    <copyright />
  </div>
</template>

<script setup>
  import { useRoutePath } from '#shared/app/composables/routing/useRoutePath'
  import {
    ref
  } from 'vue'
  import Newsletter from '~/components/blocks/Newsletter.vue'
  import copyright from '~/components/blocks/copyright.vue'
  import BottomFooter from '#social/app/components/menus/BottomFooter.vue'

  const gateway = useGateway()
  const content = gateway.content
  const { normalizeRoutePath } = useRoutePath()

  const toPath = (slug) => normalizeRoutePath(slug)

  const {
    data: about
  } = await useAsyncData('about', () => {
    return content.readItem('navigation', '7',)
  })

  const {
    data: legal
  } = await useAsyncData('legal', () => {
    return content.readItem('navigation', '8')
  })

  const {
    data: company
  } = await useAsyncData('company', () => {
    return content.readItem('navigation', '9')
  })

</script>