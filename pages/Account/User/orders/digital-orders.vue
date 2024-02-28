<template>
  <div class="contentPage">
    <profilebar />
    <v-row>
      <v-col cols="12" v-for="(orders, index) in data?.customerOrders?.items" :key="index">
        <v-card variant="text">
          <v-toolbar>
            <v-row class="orderRow">
              <v-col>
                <v-list lines="two" class="orderToolbar">
                  <v-list-item-title>Order Placed</v-list-item-title>
                  <v-list-item-subtitle>{{ orders?.order_date }}</v-list-item-subtitle>
                </v-list>
              </v-col>

              <v-col>
                <v-list lines="two" class="orderToolbar">
                  <v-list-item-title>Total</v-list-item-title>
                  <v-list-item-subtitle>$ {{orders?.grand_total}}</v-list-item-subtitle>
                </v-list>
              </v-col>

              <v-col>
                <v-list lines="two" class="orderToolbar">
                  <v-list-item-title>Order # {{orders?.order_number}}</v-list-item-title>
                  <v-list-item-subtitle><a href="/account/user/orders/my-orders/">View order details</a> | <a href="">View
                      Invoice</a></v-list-item-subtitle>
                </v-list>
              </v-col>
            </v-row>
          </v-toolbar>

          <v-card>
            <v-row>
              <v-col cols="3">
                <v-avatar image="https://randomuser.me/api/portraits/women/8.jpg" rounded="0" size="180"></v-avatar>
              </v-col>
              <v-col cols="9">
                <v-card-title>{{ orders?.items?.product_name }}</v-card-title>
                <v-card-subtitle>{{ orders?.items?.sku }}</v-card-subtitle>
                <v-card-text>{{ orders?.payment_methods?.name }} {{ orders?.payment_methods?.type }}</v-card-text>
              </v-col>
            </v-row>

            <v-card-actions>
              <v-btn color="orange" prepend-icon="fas fa-repeat" variant="outlined">Buy it again</v-btn>
              <v-btn variant="outlined">View your item</v-btn>
              <v-btn prepend-icon="fas fa-pencil" variant="outlined">Write a product review</v-btn>
            </v-card-actions>
          </v-card>

          <v-card-actions>
            <v-btn>Archive Order</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import profilebar from '../../../components/menus/profilebar.vue'

  export default {
    components: {
      profilebar
    },
    data: () => ({
      tab: null,
    }),
  }
</script>

<script setup>
const query = gql`
query MyQuery {
  customerOrders {
    items {
      id
      grand_total
      created_at
      items {
        id
        product_name
        product_sku
        product_type
        status
        ... on DownloadableOrderItem {
          id
          product_name
          product_sku
          product_url_key
          product_type
          status
          quantity_canceled
          quantity_refunded
        }
      }
      number
      order_date
      order_number
      status
      shipping_address {
        city
        country_code
        postcode
        region
        street
      }
      payment_methods {
        name
        type
      }
    }
  }
}


`
  const {
    data
  } = await useAsyncQuery(query)

  useHead({
    title: 'Digital Orders',
  })
</script>