<template>
  <div class="contentPage">
    <v-overlay v-if="loading">
      <v-progress-circular indeterminate></v-progress-circular>
    </v-overlay>

    <v-alert v-if="error" type="error" class="mb-4">
      {{ error }}
    </v-alert>
    <section data-bs-version="5.1" class="features16 cid-twc33vqs90" id="features16-1i" data-sortbtn="btn-primary"
      style="padding-top: 10px;">
      <div class="container-fluid">
        <div class="row main align-items-center">
          <div class="col-md-6 image-element align-self-stretch">
            <div class="img-wrap" style="width: 80%; height: 80%;">
              <NuxtImg loading="lazy" :src="`${$directus.url}assets/${list?.image?.filename_disk}`" :alt="list?.name" />
            </div>
          </div>
          <div class="col-md-6 text-element">
            <div class="text-content">
              <h2 class="mbr-title pt-2 mbr-fonts-style align-left display-2">
                {{list?.name}}
              </h2>

              <p class="mbr-title pt-2 mbr-fonts-style align-left display-7">
                Created: {{ new Date(list?.date_created).toLocaleDateString() }}
              </p>

              <div>Type: <p style="display: inline-block;" class="mbr-title pt-2 mbr-fonts-style align-left display-7"
                  v-html="list?.type"></p>
              </div>

              <p class="mbr-title pt-2 mbr-fonts-style align-left display-7">
                Status: {{list?.status}}
              </p>

              <div class="mbr-section-text">
                <p class="mbr-text pt-3 mbr-light mbr-fonts-style align-left display-7">
                  {{list?.description}}</p>
              </div>

              <v-row>
                <v-col>
                  <div class="mbr-section-btn pt-3 align-left">
                    <v-dialog min-width="500">
                      <template v-slot:activator="{ props: activatorProps }">
                        <v-btn v-bind="activatorProps" prepend-icon="fas fa-gear" title="Update List"
                          class="rightAddBtn" variant="flat">Update List</v-btn>
                      </template>

                      <template v-slot:default="{ isActive }">
                        <updatelist :id="listId" />
                      </template>
                    </v-dialog>
                    <v-btn class="rightAddBtn" @click="confirmDelete" :loading="deleteLoading" prepend-icon="fas fa-x"
                      variant="text" title="Delete List">Delete List
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Delete Confirmation Dialog -->
    <v-dialog v-model="deleteDialog" max-width="500px">
      <v-card>
        <v-card-title class="text-h5">Delete List</v-card-title>
        <v-card-text>
          Are you sure you want to delete this list? This action cannot be undone.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="deleteDialog = false">
            Cancel
          </v-btn>
          <v-btn color="error" variant="text" @click="deleteList" :loading="deleteLoading">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <div v-if="productsInList.length > 0" style="padding-top: 25px;">
      <v-row>
        <v-col cols="3" v-for="(product, index) in list?.list_products?.list_products_id" :key="index">
          <productCard :product="product?.product_sku" />
        </v-col>
      </v-row>
    </div>

    <div v-else style="padding-top: 25px;">
      <p style="text-align: center;">No products found in this list!</p>
    </div>

    <!-- Debug information -->
    <div v-if="list" class="debug-info" style="display: none;">
      <pre>{{ JSON.stringify(list, null, 2) }}</pre>
      <pre>{{ JSON.stringify(productsInList, null, 2) }}</pre>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        //url: process.env.DIRECTUS_URL,
        listId: this.$route.params.id
      }
    },
  }
</script>

<script setup>
  import {
    ref,
    computed
  } from 'vue'
  import {
    useRoute,
    useRouter
  } from 'vue-router'
  import {
    readItem,
    deleteItem
  } from '@directus/sdk'
  import productCard from '~/components/product/productCard.vue'
  import updatelist from '~/components/lists/update-list.vue'
  import {
    useQuery
  } from '@vue/apollo-composable'
  import products from '~/graphql/commerce/queries/products'

  const model = ref(null);
  const {
    result
  } = useQuery(products)
  const route = useRoute()
  const router = useRouter()

  // Define refs
  //const list = ref(null)
  const allProducts = ref(null)
  const productsInList = ref([])
  const loading = ref(false)
  const error = ref(null)
  const deleteDialog = ref(false)
  const deleteLoading = ref(false)

  const {
    $directus
  } = useNuxtApp()

  // Fetch list and products
  const {
        data: list
      } = await useAsyncData('list', () =>
        $directus.request(readItem('lists', route.params.id, {
            fields: ['*', {
                '*': ['*']
            }]
        }))
      )

  // Delete functionality
  const confirmDelete = () => {
    deleteDialog.value = true
  }

  const deleteList = async () => {
    try {
      deleteLoading.value = true
      await $directus.request(deleteItem('lists', route.params.id))
      deleteDialog.value = false
      navigateTo('/commerce/lists')
    } catch (err) {
      console.error('Error deleting list:', err)
      error.value = 'Failed to delete list'
    } finally {
      deleteLoading.value = false
    }
  }

  // Set page title
  useHead({
    title: computed(() => list.value?.name || 'List Page')
  })

  definePageMeta({
    middleware: ['auth'],
  })
</script>