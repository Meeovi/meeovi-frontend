<template>
    <div class="contentPage">
        <profilebar />
        <v-row>
            <v-col cols="12">
                <v-card title="Meeovi Lists" color="orange">
                    <v-sheet class="mx-auto" elevation="0" color="transparent">
                        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
                            <createlist />
                            <v-slide-group-item v-for="(list, index) in data?.lists?.nodes" :key="index"
                                v-slot="{ isSelected, toggle, selectedClass }">
                                <v-card :class="['ma-4', selectedClass]" color="white" height="221" width="196"
                                    :href="`/commerce/lists/${list.id}`" @click="toggle">
                                    <img :src="`${list?.lists?.image?.node?.sourceUrl}`" :alt="list?.title" cover/>
                                    <v-card-title>{{ list?.title }}</v-card-title>
                                    <v-card-subtitle style="display: inline-block;">By: {{list?.author?.node?.username}}</v-card-subtitle>
                                    <div class="d-flex fill-height align-center justify-center">
                                        <v-scale-transition>
                                            <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline"
                                                size="48"></v-icon>
                                        </v-scale-transition>
                                    </div>
                                </v-card>
                            </v-slide-group-item>
                        </v-slide-group>
                    </v-sheet>
                </v-card>

                <v-row class="accountRow">
                    <v-col cols="12">
                        <v-toolbar title="Your Lists" subtitle=""></v-toolbar>
                        <v-row class="accountRow">
                            <v-col cols="3" v-for="(list, index) in data?.lists?.nodes" :key="index">
                                <v-card class="mx-auto">
                                    <img :src="`${list?.lists?.image?.node?.sourceUrl}`" :alt="list?.title" cover/>
                                    <v-card-title>{{ list?.title }}</v-card-title>

                                    <v-card-subtitle class="pt-4">
                                        Type: <div style="display: inline-block;" v-html="list?.lists?.type"></div>
                                    </v-card-subtitle>

                                    <v-card-text>
                                        <div>Updated: {{ list?.date }}</div>

                                        <div>{{ list?.lists?.description }}</div>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-btn color="red" :href="`/commerce/lists/${list.id}`">
                                            Manage list
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>

                    <v-col cols="12">
                        <v-toolbar title="Public Lists" subtitle=""></v-toolbar>
                        <v-row class="accountRow">
                            <v-col cols="3" v-for="(list, index) in data?.lists?.nodes" :key="index">
                                <v-card class="mx-auto">
                                    <img :src="`${list?.lists?.image?.node?.sourceUrl}`" :alt="list?.title" cover/>
                                    <v-card-title>{{ list?.title }}</v-card-title>

                                    <v-card-subtitle class="pt-4">
                                        <v-list lines="one">
                                            <v-list-item :title="list?.author?.node?.username"
                                                :prepend-avatar="`${list?.author?.node?.avatar?.url}`"></v-list-item>
                                        </v-list>
                                        Type: <div style="display: inline-block;" v-html="list?.lists?.type"></div>
                                    </v-card-subtitle>

                                    <v-card-text>
                                        <div>Updated: {{ list?.date }}</div>

                                        <div>{{ list?.lists?.description }}</div>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-btn color="red" :href="`/commerce/lists/${list.id}`">
                                            Check Out List
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import profilebar from '../../../components/menus/profilebar.vue'
    import createlist from '../../../components/partials/createListBtn.vue'

    export default {
        components: {
            profilebar,
            createlist
        },
        data: () => ({
            model: null,
            //url: process.env.DIRECTUS_URL,
        }),
    }
</script>

<script setup>
    const query = gql `
query NewQuery {
  lists {
    nodes {
      author {
        node {
          username
          avatar {
            url
          }
        }
      }
      date
      id
      title
      lists {
        description
        ispublic
        type
        image {
          node {
            sourceUrl
          }
        }
      }
    }
  }
}
`

    const {
        data
    } = useAsyncQuery(query);
    /*const {
        getItems
      } = useDirectusItems()

      const lists = await getItems({
        collection: "lists",
      }); */

    useHead({
        title: 'Lists',
    })

    definePageMeta({
        //middleware: ['auth-logged-in'],
    })
</script>