<template>
    <div class="contentPage">
        <v-row v-for="pages in data.pages" :key="pages">
            <p class="uploadHeader">{{ pages.name }}</p>

            <div class="uploadDescription" v-html="pages.content"></div>

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
import createproduct from '../components/Create/createproduct.vue'
import createlist from '../components/Create/createlist.vue'
import bookmarkvideo from '../components/Create/bookmarkvideo.vue'

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

const query = gql`
query {
    pages (filter: {name: {_starts_with: "Upload Center"}}) {
      id
      status
      sort
      name
      content
      link
      list
      type
      date_created
    }
  }
`
const { data } = await useAsyncQuery(query)
</script>