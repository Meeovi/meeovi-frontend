<template>
  <div>
    <v-dialog v-model="dialogOpen" justify="center">
      <template v-slot:activator="{ props }">
        <button class="btn btn-info display-7" v-bind="props"><span class="mobi-mbri mobi-mbri-plus mbr-iconfont mbr-iconfont-btn"></span>Add to List</button>
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
  import list from '~/components/related/commerce/lists.vue'
  import createlist from '~/components/crud/create/add-list.vue'

  const loading = ref(false)

  // Add product_sku to props
  const props = defineProps({
    lists: {
      type: String,
      required: true
    }
  })

  const route = useRoute();
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
</script>

<style scoped>
  .v-dialog {
    border-radius: 8px;
  }
</style>