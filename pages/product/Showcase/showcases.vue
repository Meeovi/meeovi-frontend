<template>
  <div class="contentPage">
    <v-toolbar title="Showcases" color="transparent"></v-toolbar>

    <v-row>
      <v-col cols="4" v-for="showcase in data?.showcases?.nodes" :key="showcases">
        <a :href="`/product/showcase/${showcase?.id}`">
          <v-card class="mx-auto" max-width="500" :title="showcase?.showcaseFields?.name">
            <v-list lines="one">
              <v-list-item :prepend-avatar="`${showcase?.author?.node?.avatar?.url}`" :title="showcase?.author?.node?.username"></v-list-item>
            </v-list>
            <img :src="`${showcase?.showcaseFields?.image?.node?.sourceUrl}`" :alt="showcase?.showcaseFields?.name" class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" cover />
            <v-card-subtitle class="text-white">Created: {{ showcase?.date }}</v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange">Add to Cart</v-btn>
              <v-spacer></v-spacer>
              <v-btn size="small" color="surface-variant" variant="text" icon="fas fa-heart"></v-btn>

              <v-btn size="small" color="surface-variant" variant="text" icon="fas fa-bookmark"></v-btn>
            </v-card-actions>
          </v-card>
        </a>
      </v-col>
    </v-row>

  </div>
</template>

<script>
  export default {
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