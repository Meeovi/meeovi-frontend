<template>
  <div>
    <Newsletter />
    <v-btn class="footertotopbtn" title="To the Top of the Page" prepend-icon="fas fa-arrow-up" rounded="0"
      href="#mainSection">Back to Top</v-btn>
    <section data-bs-version="5.1" class="footer3 cid-u4cbW5p2qg" once="footer" id="footer03-8b"
      data-sortbtn="btn-primary">
      <div class="container">
        <v-row class="align-left justify-content-center mbr-white">
          <v-col cols="4" class="md-pb">
            <h2 class="mbr-section-title pb-2 mbr-fonts-style display-7">
              <strong>{{ aboutTitle?.name }}</strong></h2>
            <div v-for="child in about" :key="child">
              <h3 class="mbr-section-subtitle mbr-fonts-style mbr-lighter display-4"><NuxtLink
                  :href="`/${child?.id}`">{{ child?.name }}</NuxtLink></h3>
            </div>
          </v-col>
          <v-col cols="4" class="md-pb">
            <h2 class="mbr-section-title pb-2 mbr-fonts-style display-7">
              <strong>{{ legalTitle?.name }}</strong></h2>
            <div v-for="child in legal" :key="child">
              <h3 class="mbr-section-subtitle mbr-fonts-style mbr-lighter display-4"><NuxtLink
                  :href="`/${child?.id}`">{{ child?.name }}</NuxtLink></h3>
            </div>
          </v-col>
          <v-col cols="4" class="md-pb">
            <h2 class="mbr-section-title pb-2 mbr-fonts-style display-7">
              <strong>{{ companyTitle?.name }}</strong></h2>
            <div v-for="child in company" :key="child">
              <h3 class="mbr-section-subtitle mbr-fonts-style mbr-lighter display-4"><NuxtLink
                  :href="`/${child?.id}`">{{ child?.name }}</NuxtLink></h3>
            </div>
          </v-col>
        </v-row>
      </div>
    </section>

    <section data-bs-version="5.1" class="footer7 cid-u4ccfXoeP6" once="footers" id="footer7-8c"
      data-sortbtn="btn-primary">
      <div class="container">
        <div class="row align-left justify-content-center mbr-white">
          <v-col cols="3" v-for="child in copyright" :key="child">
            <v-list-item :title="child?.name" :value="child?.name" :prepend-icon="child?.icon"
              :href="`/${child?.id}`"></v-list-item>
          </v-col>
          <v-col cols="12">
            <p class="mbr-text mb-0 mbr-fonts-style display-7" style="width: 100%; text-align: center;">
              @ 2017 - {{ new Date().getFullYear() }}&nbsp;<NuxtLink to="/">{{ siteoverview?.site_name }}&nbsp;&nbsp;</NuxtLink>All
              Rights Reserved.
            </p>
          </v-col>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import Newsletter from '~/components/Newsletter.vue'

  const {
    $directus,
    $readItem,
    $readItems,
    $readSingleton
  } = useNuxtApp()
  const route = useRoute()

  const {
    siteoverview
  } = await useAsyncData('siteoverview', () => {
    return $directus.request($readSingleton('siteoverview'))
  })

  const {
    data: about
  } = await useAsyncData('about', () => {
    return $directus.request($readItems('pages', {
      filter: {
        type: {
          _eq: 'About'
        }
      }}
    ))
  })

  const {
    data: legal
  } = await useAsyncData('legal', () => {
    return $directus.request($readItems('pages', {
      filter: {
        type: {
          _eq: 'Legal'
        }
      }}))
  })

  const {
    data: company
  } = await useAsyncData('company', () => {
    return $directus.request($readItems('pages', {
      filter: {
        type: {
          _eq: 'Company'
        }
      }}))
  })

  const {
    data: copyright
  } = await useAsyncData('copyright', () => {
    return $directus.request($readItems('pages', {
      filter: {
        type: {
          _eq: 'Copyright'
        }
      }}))
  })

  const {
    data: aboutTitle
  } = await useAsyncData('aboutTitle', () => {
    return $directus.request($readItem('navigation', '7'))
  })

  const {
    data: legalTitle
  } = await useAsyncData('legalTitle', () => {
    return $directus.request($readItem('navigation', '8'))
  })

  const {
    data: companyTitle
  } = await useAsyncData('companyTitle', () => {
    return $directus.request($readItem('navigation', '9'))
  })
</script>