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
      <v-col cols="4" v-for="charts in data?.categories?.items" :key="charts">
        <v-container>
          <v-row justify="space-around">
            <v-card width="400" :href="`/product/chart/${charts?.uid}`">
              <img height="200" :src="`${charts?.image}`" :alt="charts?.name" cover
                class="text-white" />

              <v-card-text>
                {{ charts?.name }}

                <v-timeline density="compact" align="start">
                  <v-timeline-item v-for="(products, index) in charts?.products?.items" :key="index" :dot-color="charts?.color"
                    size="x-small">
                    <div class="mb-4">
                      <div class="font-weight-normal">
                        <strong>{{ products?.name }}</strong>
                      </div>
                      <div>{{ product?.price_range?.minimum_price?.regular_price?.currency }} {{ product?.price_range?.minimum_price?.regular_price?.value }}</div>
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

<script setup>
  import {
    useQuery
  } from '@vue/apollo-composable'
  import charts from '~/graphql/commerce/queries/charts'

  const {
    result
  } = useQuery(charts, null, {
    context: {
      clientName: 'secondary' // This will use the secondary endpoint
    }
  })

  useHead({
    title: 'Meeovi Charts',
  })
</script>