<template>
  <div>
      <v-card elevation="0">
          <v-toolbar title="Update A List"></v-toolbar>
          <v-form @submit.prevent="createList">
              <v-container>
                  <v-row>
                      <v-col cols="6">
                          <v-text-field v-model="title" label="List Name" required></v-text-field>
                      </v-col>
                      <v-col cols="6">
                          <v-combobox v-model="type" label="Type" :items="['List', 'Registry', 'Playlist', 'Todo']"></v-combobox>
                      </v-col>
                      <v-col cols="12">
                          <v-file-input clearable label="List Image"></v-file-input>
                      </v-col>
                      <v-col cols="12">
                          <v-textarea v-model="description" label="List Description"></v-textarea>
                      </v-col>
                      <v-col cols="12">
                          <v-card title="Choose a Product for your List">
                              <v-card-text>
                                  <v-text-field density="compact" variant="solo" label="Search Meeovi for products"
                                      append-inner-icon="fas fa-search" single-line hide-details
                                      @click:append-inner="onClick"></v-text-field>
                                  <v-spacer></v-spacer>
                                  <div class="d-flex pa-4">
                                      <v-checkbox-btn v-model="includeFiles" class="pe-2" color="orange">
                                      </v-checkbox-btn>
                                      <!--<NuxtLink :to="`/product/${products.id}`">
                                      <v-card class="ma-4" height="580" width="250" @click="toggle">
                                          <NuxtImg loading="lazy" class="align-end text-white" height="280"
                                              :src="`${products.featuredAsset.preview}`" :alt="products.name" cover />

                                          <v-card-title class="pt-4">
                                              {{ products.name }}
                                          </v-card-title>

                                          <v-card-text>
                                              <div>Sku: {{ products.variants.sku }}</div>
                                          </v-card-text>

                                          <v-card-actions>
                                              <v-card-title>$ {{ products.variants.price }}
                                              </v-card-title>
                                          </v-card-actions>
                                          <div class="d-flex fill-height align-center justify-center">
                                              <v-scale-transition>
                                                  <v-icon v-if="isSelected" color="white" size="48"
                                                      icon="mdi-close-circle-outline"></v-icon>
                                              </v-scale-transition>
                                          </div>
                                      </v-card>
                                  </NuxtLink>-->
                                  </div>
                              </v-card-text>
                          </v-card>
                      </v-col>
                  </v-row>
              </v-container>

              <v-divider class="mt-12"></v-divider>
              <v-card-actions>
                  <v-btn color="blue-darken-1" variant="text" type="submit" @click="reset = false">
                      Delete
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="blue-darken-1" variant="text" type="submit">
                      Update
                  </v-btn>
              </v-card-actions>
          </v-form>
      </v-card>
  </div>
</template>

<script setup>
  import {
      ref
  } from 'vue'
  import { useRuntimeConfig } from '#imports';

  const config = useRuntimeConfig();
  const dialog = ref(false);
  const includeFiles = ref(true);
  const enabled = ref(false);
  const title = ref('');
  const acf = ref('');
  const ispublic = ref('');
  const description = ref('');
  const type = ref('');
  const products = ref('');
  const owner = ref('');
  const image = ref('');
  const errorMessage = ref('');
  const successMessage = ref('');

  const updatelist = async () => {
      try {
          const response = await $fetch(`${config.apiUrl}/wp-json/wp/v2/list`, {
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${config.wordpressToken}`
              },
              body: JSON.stringify({
                  title: title.value,
                  ispublic: ispublic.value,
                  description: description.value,
                  image: image.value,
                  type: type.value,
                  products: products.value,
                  owner: owner.value,
                  status: 'publish',
              })
          })

          console.log(response);

          if (response.id) {
              successMessage.value = 'List updated successfully!'
              errorMessage.value = ''
          } else {
              throw new Error('Failed to update list')
          }
      } catch (error) {
          console.error('Error updating list:', error);
          if (error.response) {
              console.error('Error response:', error.response);
              if (error.response.status === 403) {
                  errorMessage.value = 'You do not have permission to update a list.'
              } else {
                  errorMessage.value = `Error: ${error.response.status} ${error.response.statusText}`
              }
          } else {
              errorMessage.value = error.message
          }
          successMessage.value = ''
      }
  }

  useHead({
      title: 'Update List',
  })
</script>