<template>
  <div class="contentPage">
    <section data-bs-version="5.1" class="features16 cid-twc33vqs90" id="features16-1i" data-sortbtn="btn-primary"
      style="padding-top: 10px;">
      <div class="container-fluid">
        <div class="row main align-items-center">
          <div class="col-md-6 image-element align-self-stretch">
            <div class="img-wrap" style="width: 80%; height: 80%;">
              <img :src="`${list?.image?.filename_disk}`" :alt="list?.name">
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
                    <v-btn class="rightAddBtn" @click="confirmDelete" :loading="deleteLoading" prepend-icon="fas fa-x" variant="text" title="Delete List">Delete List
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

    <div style="padding-top: 10px;">
      <productCard />
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
import { readItem, deleteItem } from '@directus/sdk'; // Add this import at the top
import productCard from '~/components/commerce/commerce/product/productCard.vue'
import updatelist from '~/components/crud/update/update-list.vue'

const route = useRoute();
const router = useRouter(); // Add this for navigation

// Add these new refs for delete functionality
const deleteDialog = ref(false);
const deleteLoading = ref(false);

const {
    $directus,
    $readItem,
} = useNuxtApp()

const {
    data: list
} = await useAsyncData('list', () => {
    return $directus.request($readItem('lists', route.params.id))
})

// Add these new functions for delete functionality
const confirmDelete = () => {
    deleteDialog.value = true;
};

const deleteList = async () => {
    try {
        deleteLoading.value = true;
        const { $directus } = useNuxtApp();
        
        // Delete the list using the imported deleteItem function
        await $directus.request(deleteItem('lists', route.params.id));
        
        // Close the delete dialog
        deleteDialog.value = false;
        
        // Show success message
        alert('List deleted successfully');
        
        // Redirect to lists page
        navigateTo('/commerce/lists');
    } catch (error) {
        console.error('Error deleting list:', error);
        alert('Error deleting list: ' + error.message);
    } finally {
        deleteLoading.value = false;
    }
};

useHead({
    title: computed(() => list.value?.name || 'List Page')
})

definePageMeta({
    middleware: ['authenticated'],
})
</script>
