<template>
  <div class="contentPage">
    <profilebar />
    <v-row>
      <v-col cols="12" v-for="(orders, index) in data?.customer?.orders?.nodes" :key="index">
        <v-card variant="text" :href="`/user/orders/my-orders/${orders?.id}`">
          <v-toolbar>
            <v-row class="orderRow">
              <v-col>
                <v-list lines="two" class="orderToolbar">
                  <v-list-item-title>Order Placed</v-list-item-title>
                  <v-list-item-subtitle>{{ orders?.dateCompleted }}</v-list-item-subtitle>
                </v-list>
              </v-col>

              <v-col>
                <v-list lines="two" class="orderToolbar">
                  <v-list-item-title>Total</v-list-item-title>
                  <v-list-item-subtitle>$ {{orders?.total}}</v-list-item-subtitle>
                </v-list>
              </v-col>

              <v-col>
                <v-list lines="two" class="orderToolbar">
                  <v-list-item-title>Ship To</v-list-item-title>
                  <v-list-item-subtitle>{{orders?.shipping?.address1}} {{orders?.shipping?.city}} {{orders?.shipping?.state}} {{orders?.shipping?.postcode}} {{orders?.shipping?.country}}</v-list-item-subtitle>
                </v-list>
              </v-col>

              <v-col>
                <v-list lines="two" class="orderToolbar">
                  <v-list-item-title>Order # {{orders?.orderNumber}}</v-list-item-title>
                  <v-list-item-subtitle><a href="/account/user/orders/my-orders/">View order details</a> | <a href="">View
                      Invoice</a></v-list-item-subtitle>
                </v-list>
              </v-col>
            </v-row>
          </v-toolbar>

          <v-card>
            <v-row>
              <v-col cols="3" v-for="items in data?.orders?.nodes?.lineItems" :key="items">
                <v-avatar :image="`${items?.product?.node?.image?.sourceUrl}`" rounded="0" size="180"></v-avatar>
              </v-col>
              <v-col cols="9">
                <v-card-title>{{ items?.product?.node?.name }}</v-card-title>
                <v-card-subtitle>SKU: {{ items?.product?.node?.sku }}</v-card-subtitle>
                <v-card-subtitle>Quantity: {{ items?.product?.node?.quantity }}</v-card-subtitle>
                <v-card-subtitle>Total: {{ orders?.total }}</v-card-subtitle>
                <v-card-text>Payment Method: {{ orders?.paymentMethod }} {{ orders?.paymentMethodTitle }}</v-card-text>
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
const route = useRoute();
const query = gql`
query NewQuery {
  customer {
    displayName
    id
    username
    role
    date
    orders(where: {statuses: COMPLETED}) {
      nodes {
        createdVia
      currency
      date
      dateCompleted
      datePaid
      discountTax
      discountTotal
      needsPayment
      needsProcessing
      needsShippingAddress
      shippingTax
      shippingTotal
      status
      subtotal
      total
      totalTax
      shipping {
        address1
        address2
        city
        company
        country
        email
        firstName
        lastName
        phone
        postcode
        state
      }
      id
      orderNumber
      orderVersion
      lineItems {
        nodes {
          id
          orderId
          productId
          quantity
          total
          product {
            node {
              image {
                sourceUrl
              }
              name
              sku
            }
          }
        }
      }
      paymentMethod
      paymentMethodTitle
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
    title: 'My Orders',
  })

  definePageMeta({
	  middleware: ['auth-logged-in'],
	})
</script>