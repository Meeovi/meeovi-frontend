<template>
    <div>
        <v-row>
            <v-col cols="12">
                <v-card>
                 <v-toolbar :title="`Your Gift Card Balance:${products.price?.regularPrice?.amount?.currency}${products.price?.regularPrice?.amount?.value}`"></v-toolbar>   

                 <v-card-actions>
                    <v-btn href="/commerce/giftcard/reload">Reload Your Balance</v-btn>
                    <v-btn>Redeem a Gift Card</v-btn>
                 </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12">
                <v-toolbar title="Gift Card Activity Page 1 of 1 (8 total transactions)"></v-toolbar>
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
                        <tr v-for="(products, index) in data?.products?.items" :key="index">
                            <td>{{ products.created_at }}</td>
                            <td v-html="products?.description?.html"></td>
                            <td>{{ products.price?.regularPrice?.amount?.currency }}{{ products.price?.regularPrice?.amount?.value }}</td>
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
const query = gql `
query MyQuery {
  products(filter: {price: {from: "0"}, format: {eq: "Gift Cards"}}) {
    items {
      categories {
        name
        image
      }
      format
      id
      is_featured
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
      sale
      sku
      image {
        url
      }
      manufacturer
      special_price
      size
      description {
        html
      }
    }
  }
}

`
    const {
        data
    } = await useAsyncQuery(query)
</script>