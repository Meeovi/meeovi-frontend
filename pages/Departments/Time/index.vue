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
      <!--Department Clock Banner-->
      <div v-for="categories in data?.productCategories?.nodes" :key="categories">
        <section data-bs-version="5.1" class="header5 cid-ueXph5BkCt mbr-fullscreen mbr-parallax-background" id="header5-9k" data-sortbtn="btn-primary" :style="`background: url(${categories?.image?.sourceUrl}); background-size: cover;`">
          <div class="container">
            <div class="row justify-content-end">
              <div class="col-12 col-lg-7 homeSection">
                <strong>
                  <h1 class="mbr-section-title mbr-fonts-style mbr-white mb-3 display-1">Meeovi {{ categories?.name }}</h1>
                  <h1 class="mbr-section-title mbr-fonts-style mbr-white mb-3 display-1" id="dateTime"></h1>
                </strong>

                <div>
                  <p class="mbr-text mbr-fonts-style mbr-white display-7" v-html="categories?.description"></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
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

        <!--List of spaces in the category-->
        <h2>Spaces about {{ items?.name }}</h2>
        <relatedspaces />
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

  export default {
    components: {
      //videobar,
      //live,
      shorts,
      latestproducts,
      bestsellers,
      relatedcreators,
      productCard,
      relatedspaces
    },
    data() {
      return {
        model: null,
        url: process.env.DIRECTUS_URL,
      }
    },
    mounted() {
      setInterval(myTimer, 1000);

      function myTimer() {
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
          "November", "December"
        ];
        const date = new Date();

        let name = month[date.getMonth()];
        const day = new Date().toLocaleString();

        document.getElementById("dateTime").innerHTML = name + " " + day;
      }
    }
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
  productCategories(where: {name: "Time"}) {
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
      products(where: {category: "Time"}) {
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
    title: 'Meeovi Time',
  })
</script>