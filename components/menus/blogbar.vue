<template>
  <div>
    <section data-bs-version="5.1" class="info3 cid-so8NrSOKu6 mbr-parallax-background" id="info3-28">
      <div class="mbr-overlay" style="opacity: 0.6; background-color: rgb(68, 121, 217);">
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="card col-12 col-lg-10">
            <div class="card-wrapper">
              <div class="card-box align-center">
                <h4 class="card-title mbr-fonts-style align-center mb-4 display-1">
                  <strong>{{data?.nodeByUri?.title}}</strong></h4>
                <p class="mbr-text mbr-fonts-style mb-4 display-7" v-html="data?.nodeByUri?.content"></p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div>
      <v-card>
        <v-tabs bg-color="blue-lighten-4" center-active>
          <v-tab><NuxtLink to="/blog/">All</NuxtLink></v-tab>
          <v-tab v-for="categories in data?.categories?.nodes" :key="categories"><NuxtLink
              :href="`/blog/category/${categories?.parent?.node.id}`">{{ categories?.parent?.node.name }}</NuxtLink></v-tab>
        </v-tabs>
      </v-card>
    </div>
  </div>
</template>

<script setup>
   import {
        ref
    } from 'vue'  

const {
    data
} = useAsyncQuery(blogbar);/**/

const tab = ref(null);
</script>