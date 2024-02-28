<template>
    <div class="contentPage">
        <v-toolbar color="transparent" :title="chart?.name"></v-toolbar>
        <v-table class="charttable">
            <thead>
                <tr>
                    <th></th>
                    <th class="text-left">
                        This Week
                    </th>
                    <th class="text-left">Name</th>
                    <th class="text-left">
                        Award
                    </th>
                    <th class="text-left">
                        Last Week
                    </th>
                    <th class="text-left">
                        Peak Position
                    </th>
                    <th class="text-left">
                        Weeks on Chart
                    </th>
                    <th class="text-left">
                        Buy
                    </th>
                    <th class="text-left">Share</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(products, index) in data?.products?.items" :key="index">
                    <td class="chartnumber">
                        <h1>{{ chart?.this_week }}</h1>
                    </td>
                    <td>
                        <v-avatar :image="products?.image?.url" rounded="0" size="130"></v-avatar>
                    </td>
                    <td>
                        <v-list>
                            <v-list-item :title="products?.name" :subtitle="products?.short_description?.html"></v-list-item>
                        </v-list>
                    </td>
                    <td>
                        <v-avatar icon="fas fa-star" :style="`color: ${chart?.reward}`"></v-avatar>
                    </td>
                    <td>
                        <h5>{{ chart?.last_week }}</h5>
                    </td>
                    <td>
                        <h5>{{ chart?.peak_position }}</h5>
                    </td>
                    <td>
                        <h5>{{ chart?.weeks_on_chart }}</h5>
                    </td>
                    <td>
                        <v-btn href="" icon="fas fa-shopping-cart"></v-btn>
                    </td>
                </tr>
            </tbody>
        </v-table>
        <relatedchart />
        <relatedproducts /><!---->
        <recentlyviewed /><!---->
    </div>
</template>

<script>
    import relatedchart from '../../../components/related/relatedcharts.vue'
    import relatedproducts from '../../../components/related/relatedproducts.vue'
    import recentlyviewed from '../../../components/related/recentlyviewed.vue'

    export default {
        components: {
            relatedchart,
            relatedproducts,
            recentlyviewed
        },
    }
</script>

<script setup>
const { $directus, $readItem } = useNuxtApp()
const route = useRoute()

const { data: chart } = await useAsyncData('musicchart', () => {
  return $directus.request(
    $readItem('musicchart', route.params.slug, {
      fields: ['*', { '*': ['*'] }]
    })
  )
})

const query = gql `
query {
    products(filter: {category_id: {eq: "42"}, format: {eq: "Chart"}}) {
    items {
      uid
      name
      categories {
        name
      }
      price_range {
        maximum_price {
          regular_price {
            currency
            value
          }
        }
      }
      image {
        url
      }
      rating_summary
      color
      created_at
      description {
        html
      }
      format
      manufacturer
      media_gallery {
        url
      }
      only_x_left_in_stock
      review_count
      reviews {
        items {
          nickname
          summary
          text
          average_rating
          created_at
          ratings_breakdown {
            name
            value
          }
        }
      }
      short_description {
        html
      }
      size
      sku
    }
  }
}

`

  const {
    data
  } = useAsyncQuery(query);

    useHead({
        title: '',
    })
</script>