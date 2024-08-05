<template>
    <div class="contentPage">
        <v-row>
            <v-col cols="12">
             <p class="uploadHeader">{{ page.name }}</p>

             <p class="uploadDescription" v-html="page.content"></p>   
            </v-col>
            
            <v-col cols="12">
                <v-card>
                    <v-tabs v-model="tab" bg-color="orange">
                        <v-tab value="one">Create A Product</v-tab>
                        <v-tab value="two">Create A List</v-tab>
                        <v-tab value="three">Bookmark A Video</v-tab>
                    </v-tabs>

                    <v-card-text>
                        <v-window v-model="tab">
                            <v-window-item value="one">
                                <createproduct />
                            </v-window-item>

                            <v-window-item value="two">
                                <createlist />
                            </v-window-item>

                            <v-window-item value="three">
                                <bookmarkvideo />
                            </v-window-item>
                        </v-window>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import createproduct from '../components/create/commerce/createproduct.vue'
import createlist from '../components/create/commerce/createlist.vue'
import bookmarkvideo from '../components/create/social/bookmarkvideo.vue'

  export default {
    components: { createproduct, createlist, bookmarkvideo },
    data: () => ({
      tab: null,
    }),
  }
</script>

<script setup>
    useHead({
        title: 'Upload Center',
    })

const {
    getItemById
  } = useDirectusItems()

  const page = await getItemById({
    collection: "pages",
    id: 20
  });

  definePageMeta({
	  middleware: ['auth-logged-in'],
	})  
</script>