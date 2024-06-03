<template>
    <div class="contentPage">
        <profilebar />
        <v-row>
            <v-col cols="12">
                <v-toolbar title="Your Lists" subtitle=""></v-toolbar>
                <v-row class="accountRow">
                    <v-col cols="3" v-for="(list, index) in data?.lists?.nodes" :key="index">
                        <v-card class="mx-auto" max-width="400">
                            <v-card-title>{{ list?.lists?.name }}</v-card-title>

                            <v-card-subtitle class="pt-4">
                                Type: <div style="display: inline-block;" v-html="list?.lists?.type"></div>
                            </v-card-subtitle>

                            <v-card-text>
                                <div>Updated: {{ list?.date }}</div>

                                <div>{{ list?.lists?.description }}</div>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn color="orange">
                                    Archive Order
                                </v-btn>

                                <v-btn color="red" :href="`/commerce/lists/${list.id}`">
                                    Manage list
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="12">
                <v-toolbar title="Lists" subtitle=""></v-toolbar>
                <v-row class="accountRow">
                    <v-col cols="3" v-for="(list, index) in data?.lists?.nodes" :key="index">
                        <v-card class="mx-auto" max-width="400">
                            <v-card-title>{{ list?.lists?.name }}</v-card-title>

                            <v-card-subtitle class="pt-4">
                                <v-list lines="one">
                                    <v-list-item :title="list?.author?.node?.username" :prepend-avatar="`${list?.author?.node?.avatar?.url}`"></v-list-item>
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
    </div>
</template>

<script>
    import profilebar from '../../../components/menus/profilebar.vue'

    export default {
        components: {
            profilebar
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
      lists {
        description
        ispublic
        name
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