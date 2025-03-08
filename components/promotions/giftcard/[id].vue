<template>
    <div>
        <v-row>
            <v-col cols="4">
                <h4 style="text-align: center;">Gift Card Image</h4>
                <NuxtImg loading="lazy" :src="`${data?.giftCard?.giftCardFields?.image?.node?.sourceUrl}`" :alt="data?.giftCard?.giftCardFields?.name" />
            </v-col>
            <v-col cols="8">
                <v-card style="margin-bottom: 20px;">
                 <v-toolbar :title="`Your Gift Card Balance: ${data?.giftCard?.giftCardFields?.amount}`">
                    <div v-for="card in data?.giftCard?.giftCardFields" :key="card">
                     <div v-for="brand in card?.brands?.nodes" :key="brand">Brand: {{ brand?.brandFields?.name }}</div>   
                    </div>
                </v-toolbar>   

                 <v-card-actions>
                    <v-btn :href="`/commerce/giftcard/reload`">Reload Your Balance</v-btn>
                    <v-btn :href="`/commerce/giftcard/redeem/${giftCard?.id}`">Redeem a Gift Card</v-btn>
                 </v-card-actions>
                </v-card>

                <v-toolbar title="Gift Card Activity"></v-toolbar>
                <v-table>
                    <thead>
                        <tr>
                            <th class="text-left">
                                Date
                            </th>
                            <th class="text-left">
                                Description
                            </th>
                            <th class="text-left">
                                Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(products, index) in data?.giftCard?.products?.items" :key="index">
                            <td>{{ products.date }}</td>
                            <td>{{ products?.name }}</td>
                            <td>{{ products.price }}</td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        data: () => ({
            products: " ",
            shipments: null,
            shipping_method: "",
            shipping_address: "",
            grand_total: null,
            order_date: null,
            order_number: null,
            payment_methods: null,
        }),
    }
</script>

<script setup>
const route = useRoute();
import gql from 'graphql-tag'

const query = gql`
query NewQuery ($id: ID!) {
  giftCard(id: $id) {
    date
    id
    giftCardFields {
      amount
      format
      name
      brands {
        nodes {
          ... on Brand {
            id
            brandFields {
              name
            }
          }
        }
      }
      image {
        node {
          sourceUrl
        }
      }
      products {
        items {
          date
          id
          ... on SimpleProduct {
            name
            price
          }
        }
      }
    }
    status
  }
}
`

  const {
    data
  } = useAsyncQuery(query, { id: route.params.id });
/*const {
    getItemById
  } = useDirectusItems()
  const route = useRoute();

  const card = await getItemById({
    collection: "gift_card",
    id: route.params.id,
  }); */

    useHead({
        title: data?.giftCard?.name,
    })  

    definePageMeta({
    middleware: ['auth'],
  })
</script>