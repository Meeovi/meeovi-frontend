<template>
  <div>
    <v-dialog v-model="dialogOpen" justify="center">
      <template v-slot:activator="{ props }">
        <SfButton v-bind="props" variant="tertiary" size="sm" square
          class="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full"
          aria-label="Add to list">
          <SfIconFavorite size="sm" />
        </SfButton>
      </template>

      <v-card max-width="500px">
        <v-tabs v-model="tab" bg-color="info">
          <v-tab value="one">Your Lists</v-tab>
          <!--<v-tab value="two">Create a List</v-tab>
          <v-tab value="three">Item Three</v-tab>-->
        </v-tabs>

        <v-card-text>
          <v-tabs-window v-model="tab">
            <v-tabs-window-item value="one">
              <v-row>
                <v-col cols="12" v-for="list in lists" :key="list.id">
                  <strong>
                    <p style="text-align: center;">Save</p>
                  </strong>
                  <v-list lines="two">
                    <v-list-item :title="list?.name" :subtitle="list?.type"
                      :prepend-avatar="`${$directus.url}/assets/${list?.image?.filename_disk}`"
                      @click="saveProductToList(list.id)" style="cursor: pointer;" :disabled="loading">
                      <template v-slot:append>
                        <v-progress-circular v-if="loading" indeterminate size="24"></v-progress-circular>
                        <v-icon v-else icon="fas fa-plus"></v-icon>
                      </template>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>

              <createlist />
            </v-tabs-window-item>

            <v-tabs-window-item value="two">
            </v-tabs-window-item>

            <v-tabs-window-item value="three">
              Three
            </v-tabs-window-item>
          </v-tabs-window>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
  import {
    ref,
    onMounted
  } from 'vue'
  import {
    SfButton,
    SfIconFavorite
  } from '@storefront-ui/vue'
  import list from '~/components/commerce/related/lists.vue'
  import createlist from '~/components/crud/create/add-list.vue'

  const loading = ref(false)

  // Add product_sku to props
  const props = defineProps({
    product_sku: {
      type: String,
      required: true
    }
  })

  const dialogOpen = ref(false);
  const tab = ref(null);
  const {
    $directus,
    $readItems,
    $createItem
  } = useNuxtApp()

  const {
    data: lists
  } = await useAsyncData('lists', () => {
    return $directus.request($readItems('lists', {
      filter: {
        status: {
          _eq: 'Public'
        }
      }
    }))
  })

  const checkListProducts = async (listId) => {
    console.log('Checking current list contents...');
    await checkListProducts(listId);

    try {
      const products = await $directus.request($readItems('list_products', {
        fields: ['*'],
        filter: {
          lists: {
            _eq: listId
          }
        }
      }));
      console.log(`Products in list ${listId}:`, products);
      return products;
    } catch (error) {
      console.error('Error checking list products:', error);
      return null;
    }
  };

  const saveProductToList = async (listId) => {
    loading.value = true;

    try {
      console.log('Input values:', {
        listId,
        product_sku: props.product_sku
      });

      // Check if the product already exists in the list
      const existingProducts = await $directus.request(
        $readItems('list_products', {
          filter: {
            'lists.id': {
              _eq: listId
            },
            product_sku: {
              _eq: props.product_sku
            },
          },
        })
      )?.data || [];

      console.log('Existing products query result:', existingProducts);

      if (existingProducts.length > 0) {
        this.$refs.alert.showAlert({
          message: 'Product already exists in this list',
          color: 'warning', // or error, warning, info
          type: 'warning', // or error, warning, info
          timeout: 3000 // optional, defaults to 3000ms
        })
        return;
      }

      // Prepare payload for many-to-many relationship
      const productData = {
        product_sku: props.product_sku,
        quantity: 1,
        date_created: new Date().toISOString(),
        lists: [listId], // Pass listId directly
      };

      console.log('Attempting to save product data:', productData);

      const savedProduct = await $directus.request($createItem('list_products', productData));
      console.log('Save response:', savedProduct);

      if (savedProduct) {
        this.$refs.alert.showAlert({
          message: 'Product added to list successfully',
          color: 'success', // or error, warning, info
          type: 'success', // or error, warning, info
          timeout: 3000 // optional, defaults to 3000ms
        })
        dialogOpen.value = false;
      }
    } catch (error) {
      console.error('Error in saveProductToList:', error);
      this.$refs.alert.showAlert({
        message: 'Failed to add product to list',
        color: 'error', // or error, warning, info
        type: 'error', // or error, warning, info
        timeout: 3000 // optional, defaults to 3000ms
      })
    } finally {
      loading.value = false;
    }
  };
</script>

<style scoped>
  .v-dialog {
    border-radius: 8px;
  }
</style>