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
              <strong>{{ about?.name }}</strong></h2>
            <div v-for="child in about?.menus" :key="child.id">
              <h3 class="mbr-section-subtitle mbr-fonts-style mbr-lighter display-4"><a
                  :href="`/${child?.slug}`">{{ child?.name }}</a></h3>
            </div>
          </v-col>
          <v-col cols="4" class="md-pb">
            <h2 class="mbr-section-title pb-2 mbr-fonts-style display-7">
              <strong>{{ legal?.name }}</strong></h2>
            <div v-for="child in legal?.menus" :key="child.id">
              <h3 class="mbr-section-subtitle mbr-fonts-style mbr-lighter display-4"><a
                  :href="`/${child?.slug}`">{{ child?.name }}</a></h3>
            </div>
          </v-col>
          <v-col cols="4" class="md-pb">
            <h2 class="mbr-section-title pb-2 mbr-fonts-style display-7">
              <strong>{{ company?.name }}</strong></h2>
            <div v-for="child in company?.menus" :key="child.id">
              <h3 class="mbr-section-subtitle mbr-fonts-style mbr-lighter display-4"><a
                  :href="`/${child?.slug}`">{{ child?.name }}</a></h3>
            </div>
          </v-col>
        </v-row>
      </div>
    </section>

    <section data-bs-version="5.1" class="footer7 cid-u4ccfXoeP6" once="footers" id="footer7-8c"
      data-sortbtn="btn-primary">
      <div class="container">
        <div class="row align-left justify-content-center mbr-white">
          <v-col cols="3" v-for="child in copyright?.menus" :key="child.id">
            <v-list-item :title="child?.name" :value="child?.name" :prepend-icon="child?.icon"
              :href="`/${child?.slug}`"></v-list-item>
          </v-col>
          <v-col cols="12">
            <p class="mbr-text mb-0 mbr-fonts-style display-7" style="width: 100%; text-align: center;">
              @ 2017 - {{ new Date().getFullYear() }}&nbsp;<a href="/">{{ siteoverview?.site_name }}&nbsp;&nbsp;</a>All
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

  const {
    $directus,
    $readItem,
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
    return $directus.request($readItem('navigation', '7'))
  })

  const {
    data: legal
  } = await useAsyncData('legal', () => {
    return $directus.request($readItem('navigation', '8'))
  })

  const {
    data: company
  } = await useAsyncData('company', () => {
    return $directus.request($readItem('navigation', '9'))
  })

  const {
    data: copyright
  } = await useAsyncData('copyright', () => {
    return $directus.request($readItem('navigation', '10'))
  })
</script>