<template>
    <div class="contentPage">
        <v-card variant="text">
            <v-tabs center-active>
                <h5>Meeovi {{ data?.category?.name }}</h5>
                <v-tab><a :href="`/departments/${data?.category?.uid}`">All</a></v-tab>
                <v-tab><a
                        :href="`/departments/categories/${data?.category?.children?.uid}`">{{ data?.category?.children?.name }}</a>
                </v-tab>
            </v-tabs>
        </v-card>
        <v-row class="contentSection">
            <v-col cols="3">
                <v-card :loading="loading" class="mx-auto my-12" max-width="374">
                    <template v-slot:loader="{ isActive }">
                        <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate>
                        </v-progress-linear>
                    </template>

                    <v-img cover height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

                    <v-card-item>
                        <v-card-title>Cafe Badilico</v-card-title>

                        <v-card-subtitle>
                            <span class="me-1">Local Favorite</span>

                            <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
                        </v-card-subtitle>
                    </v-card-item>

                    <v-card-text>
                        <v-row align="center" class="mx-0">
                            <v-rating :model-value="4.5" color="amber" density="compact" half-increments readonly
                                size="small"></v-rating>

                            <div class="text-grey ms-4">
                                4.5 (413)
                            </div>
                        </v-row>

                        <div class="my-4 text-subtitle-1">
                            $ • Italian, Cafe
                        </div>

                        <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                            seating.</div>
                    </v-card-text>

                    <v-divider class="mx-4 mb-1"></v-divider>

                    <v-card-title>Tonight's availability</v-card-title>

                    <div class="px-4">
                        <v-chip-group v-model="selection">
                            <v-chip>5:30PM</v-chip>

                            <v-chip>7:30PM</v-chip>

                            <v-chip>8:00PM</v-chip>

                            <v-chip>9:00PM</v-chip>
                        </v-chip-group>
                    </div>

                    <v-card-actions>
                        <v-btn color="deep-purple-lighten-2" variant="text" @click="reserve">
                            Reserve
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        data: () => ({
            loading: false,
            selection: 1,
        }),

        methods: {
            reserve() {
                this.loading = true

                setTimeout(() => (this.loading = false), 2000)
            },
        },
    }
</script>

<script setup>
const query = gql `
query MyQuery {
  category(id: 10) {
    canonical_url
    children {
      id
      name
      path
    }
    description
    image
    landing_page
    name
    path
    uid
    products {
      items {
        image {
          url
        }
        format
        manufacturer
        name
        only_x_left_in_stock
        price {
          regularPrice {
            amount {
              currency
              value
            }
          }
        }
        rating_summary
        sale
        size
        sku
        special_price
        stock_status
        uid
      }
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query);

    useHead({
        title: 'Meeovi Restaurants'
    })
</script>