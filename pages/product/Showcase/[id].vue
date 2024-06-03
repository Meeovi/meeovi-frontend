<template>
  <div class="contentPage">
    <section data-bs-version="5.1" class="header7 cid-twaHyROL0Y mbr-fullscreen" id="header7-43" :style="`background: ${data?.showcase?.showcaseFields?.color}`">
      <div class="animated-text-background display-7"
        style="color: rgb(239, 239, 239); opacity: 0.2; font-size: 10rem;">
        <span class="animated-element" data-word="Meet the new collection" data-speed="60">
        </span>
      </div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 align-left img-block" :style="`background-color: ${data?.showcase?.showcaseFields?.color};`">
            <div class="mbr-figure">
              <img :src="`${data?.showcase?.showcaseFields?.image?.node?.sourceUrl}`"
                :alt="data?.showcase?.showcaseFields?.name">
            </div>
          </div>
          <div class="mbr-white col-md-6" :style="`color: ${data?.showcase?.showcaseFields?.colortext} !important`">
            <v-list lines="one" style="background-color: transparent !important;">
              <v-list-item :prepend-avatar="`${data?.showcase?.author?.node?.avatar?.url}`"
                :title="data?.showcase?.author?.node?.username"></v-list-item>
            </v-list>
            <h4 class="mbr-section-subtitle mbr-fonts-style align-left pb-2 display-5" :style="`color: ${data?.showcase?.showcaseFields?.colortext} !important`">
              {{ data?.showcase?.showcaseFields?.description }}</h4>
            <h6 class="mbr-section-title mbr-white mbr-bold mbr-fonts-style align-left display-5" :style="`color: ${data?.showcase?.showcaseFields?.colortext} !important`">Created:
              {{ new Date(data?.showcase?.date).toLocaleDateString() }}</h6>
          </div>
        </div>
      </div>
    </section>

    <productCard />
  </div>
</template>

<script>
  import productCard from '../../../components/commerce/product/productCard.vue'

  export default {
    components: {
      productCard
    }
  }
</script>

<script setup>
  const route = useRoute();
  const query = gql `
query NewQuery ($id: ID!) {
  showcase(id: $id) {
    author {
      node {
        avatar {
          url
        }
        username
      }
    }
    date
    id
    title
    slug
    status
    content
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
      products {
        nodes {
          id
          date
          ... on SimpleProduct {
            id
            name
            averageRating
            image {
              sourceUrl
            }
            price
            sku
            status
            title
            type
          }
        }
      }
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query, {
    id: route.params.id
  });

  useHead({
    title: data?.showcase?.showcaseFields?.name
  })
</script>