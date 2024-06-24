<template>
  <div class="contentPage">
    <profilebar />
    <v-toolbar title="Showcases" color="purple">
      <v-dialog min-width="500">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn v-bind="activatorProps" prepend-icon="fas fa-plus" title="Update Showcase" variant="flat">Update Showcase
          </v-btn>
        </template>

        <template v-slot:default="{ isActive }">
          <createshowcase />
        </template>
      </v-dialog>
    </v-toolbar>

    <v-row style="padding-top: 10px;">
      <v-col cols="4" v-for="showcase in data?.showcases?.nodes" :key="showcases">
        <a :href="`/product/showcase/${showcase?.id}`">
          <v-card class="mx-auto" max-width="500" :title="showcase?.showcaseFields?.name">
            <v-list lines="one">
              <img :src="`${showcase?.showcaseFields?.image?.node?.sourceUrl}`" :alt="showcase?.showcaseFields?.name"
                class="align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" cover />
              <v-list-item :prepend-avatar="`${showcase?.author?.node?.avatar?.url}`"
                :title="showcase?.author?.node?.username"></v-list-item>
            </v-list>
            <v-card-subtitle class="text-white">Created: {{ new Date(showcase?.date).toLocaleDateString() }}
            </v-card-subtitle>
            <v-card-subtitle class="text-white">{{ showcase?.showcaseFields?.description }}</v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange">Add to Cart</v-btn>
              <v-spacer></v-spacer>

              <bookmark />
            </v-card-actions>
          </v-card>
        </a>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import profilebar from '../../../components/menus/profilebar.vue'
  import createshowcase from '../../../components/create/social/createshowcase.vue'
  import bookmark from '../../../components/social/bookmark.vue'

  export default {
    components: {
      profilebar,
      createshowcase,
      bookmark
    },
    data: () => ({}),
  }
</script>

<script setup>
  const query = gql `
query NewQuery {
  showcases {
    nodes {
      title
      status
      slug
      id
      date
      showcaseFields {
        color
        colortext
        description
        image {
          node {
            sourceUrl
          }
        }
        name
        rating
      }
      author {
        node {
          avatar {
            url
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

  /*const { getItems } = useDirectusItems()

      const showcases = await getItems({
        collection: "showcases"
      });*/

  useHead({
    title: 'Showcases',
  })
</script>