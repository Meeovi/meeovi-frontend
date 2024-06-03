<template>
  <div>
    <v-card class="lowerbar">
      <v-tabs center-active>
        <h5>Meeovi Charts</h5>
        <!--<v-tab><a :href="`/Product/Chart/charts/`">All</a></v-tab>
        <v-tab><a :href="`/categories/${charts?.categories?.categories_id?.id}`"></a></v-tab>-->
      </v-tabs>
    </v-card>
    <v-row class="contentPage">
      <v-col cols="4" v-for="charts in data?.charts?.nodes" :key="charts">
        <v-container>
          <v-row justify="space-around">
            <v-card width="400" :href="`/product/chart/${charts?.id}`">
              <img height="200" :src="`${charts?.chartFields?.image?.node?.sourceUrl}`" :alt="charts?.chartFields?.name" cover
                class="text-white" />

              <v-card-text>
                {{ charts?.chartFields?.name }}
                <div class="font-weight-bold ms-1 mb-2">
                  {{ charts?.date }}
                </div>

                <v-timeline density="compact" align="start">
                  <v-timeline-item v-for="(products, index) in charts?.products?.nodes" :key="index" :dot-color="charts?.chartFields?.color"
                    size="x-small">
                    <div class="mb-4">
                      <div class="font-weight-normal">
                        <strong>{{ products?.name }}</strong>
                      </div>
                      <div>{{ products?.price }}</div>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    data: () => ({
      url: process.env.DIRECTUS_URL,
    }),
  }
</script>

<script setup>
const query = gql `
query NewQuery {
  charts {
    nodes {
      chartFields {
        name
        image {
          node {
            sourceUrl
          }
        }
        products {
          nodes {
            id
            ... on SimpleProduct {
              id
              name
              price
            }
          }
        }
        color
      }
      id
      date
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

    const charts = await getItems({
        collection: "musicchart"
    });*/

  useHead({
    title: 'Meeovi Charts',
  })
</script>