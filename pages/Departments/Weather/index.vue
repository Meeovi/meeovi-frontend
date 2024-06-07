<template>
  <div class="departmentPage">
    <v-card variant="text">
      <v-tabs center-active v-for="categories in data?.productCategories?.nodes" :key="categories">
        <h5 style="padding: 15px">Meeovi {{ categories.name }}</h5>
        <v-tab><a style="color: black;" :href="`/departments/${data.productCategory?.id}`">All</a></v-tab>
        <v-tab v-for="items in categories.children?.nodes" :key="items"><a style="color: black;"
            :href="`/departments/categories/${items.id}`">{{ items.name }}</a>
        </v-tab>
      </v-tabs>
      <!--Department Weather Banner-->
      <iframe src="https://www.meteoblue.com/en/weather/maps/widget?windAnimation=0&windAnimation=1&gust=0&gust=1&satellite=0&satellite=1&cloudsAndPrecipitation=0&cloudsAndPrecipitation=1&temperature=0&temperature=1&sunshine=0&sunshine=1&extremeForecastIndex=0&extremeForecastIndex=1&geoloc=detect&tempunit=C&windunit=km%252Fh&lengthunit=metric&zoom=5&autowidth=auto"  frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: 100%; height: 720px"></iframe><div style="display: none !important;"><!-- DO NOT REMOVE THIS LINK --><a href="https://www.meteoblue.com/en/weather/maps/index?utm_source=weather_widget&utm_medium=linkus&utm_content=map&utm_campaign=Weather%2BWidget" target="_blank" rel="noopener">meteoblue</a></div>
      <!--Department Creators Slider-->
      <shorts />
    </v-card>

    <div v-for="products in data?.productCategories?.nodes" :key="products">
      <v-row class="departmentRow" v-for="items in products?.products?.nodes" :key="items">
        <!--Best Seller Product Slider-->
        <h2>Best Sellers in {{ items?.name }}</h2>
        <productCard />

        <!--List of products in the category-->
        <h2>Latest in {{ items?.name }}</h2>
        <productCard />

        <!--List of products in the category-->
        <h2>Featured in {{ items?.name }}</h2>
        <productCard />
        <!---->

        <!--List of news in the category-->
        <h2>News in {{ items?.name }}</h2>
        <relatednews />
      </v-row>
    </div>

    <latestproducts />
    <bestsellers />
    <relatedcreators />
  </div>
</template>

<script>
  //import videobar from '../../components/menus/videobar.vue'
  import latestproducts from '../../components/related/latestproducts.vue'
  import bestsellers from '../../components/related/bestsellers.vue'
  import relatedcreators from '../../components/related/relatedcreators.vue'
  import productCard from '../../components/commerce/product/productCard.vue'
  import shorts from '../../components/related/shorts.vue'
  import relatedspaces from '../../components/related/relatedspaces.vue'
  import relatednews from '../../components/related/relatednews.vue'

  export default {
    components: {
      //videobar,
      //live,
      shorts,
      latestproducts,
      bestsellers,
      relatedcreators,
      productCard,
      relatedspaces,
      relatednews
    },
    data() {
      return {
        model: null,
        url: process.env.DIRECTUS_URL,
      }
    },
  }
</script>

<script setup>
  /*  const {
    getItemById, getItems
  } = useDirectusItems()
  const route = useRoute();

  const department = await getItemById({
    collection: "departments",
    id: route.params.id,
    filter: {
      categories: {
        categories_id: {
          _eq: route.params.id
        }
      }
    }
  }); */

  //const route = useRoute();
  const query = gql `
query NewQuery {
  productCategories(where: {name: "Weather"}) {
    nodes {
      id
      name
      children {
        nodes {
          id
          name
        }
      }
      description
      image {
        sourceUrl
      }
      products(where: {category: "Weather"}) {
        nodes {
          content
          excerpt
          id
          image {
            sourceUrl
          }
          name
          sku
          slug
          status
          title
          type
          uri
        }
      }
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query);

  definePageMeta({
    layout: 'nolive',
  });

  useHead({
    title: 'Meeovi Weather',
  })
</script>