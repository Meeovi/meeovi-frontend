<template>
  <div>
    <!---->
    <v-row>
      <v-col cols="12" v-for="(refunds, index) in data?.customer?.refunds?.nodes" :key="index">
        <v-card variant="text">
          <v-toolbar>
            <v-row class="orderRow">
              <v-col>
                <v-list lines="two" class="orderToolbar">
                  <v-list-item-title>Return Placed</v-list-item-title>
                  <v-list-item-subtitle>{{ refunds?.date }}</v-list-item-subtitle>
                </v-list>
              </v-col>

              <v-col>
                <v-list lines="two" class="orderToolbar">
                  <v-list-item-title>Amount</v-list-item-title>
                  <v-list-item-subtitle>$ {{refunds?.amount}}</v-list-item-subtitle>
                </v-list>
              </v-col>

              <v-col>
                <v-list lines="two" class="orderToolbar">
                  <v-list-item-title>Refunded By</v-list-item-title>
                  <v-list-item-subtitle>@{{refunds?.refundedBy?.username}} {{refunds?.refundedBy?.firstName}} {{refunds?.refundedBy?.lastName}} {{refunds?.refundedBy?.email}} {{refunds?.refundedBy?.locale}}</v-list-item-subtitle>
                </v-list>
              </v-col>

              <v-col>
                <v-list lines="two" class="orderToolbar">
                  <v-list-item-title>Return # {{refunds?.id}}</v-list-item-title>
                  <v-list-item-subtitle><NuxtLink to="/account/user/orders/my-orders/">View order details</NuxtLink> | <NuxtLink to="">View
                      Invoice</NuxtLink></v-list-item-subtitle>
                </v-list>
              </v-col>
            </v-row>
          </v-toolbar>

          <v-card>
            <v-row>
              <v-col cols="3">
                <v-avatar :image="`${refunds?.refundedBy?.avatar?.url}`" rounded="0" size="180"></v-avatar>
              </v-col>
              <v-col cols="9">
                <v-card-title>{{ refunds?.items?.product_name }}</v-card-title>
                <v-card-subtitle>{{ refunds?.items?.sku }}</v-card-subtitle>
                <v-card-text>{{ refunds?.payment_methods?.name }} {{ refunds?.payment_methods?.type }}</v-card-text>
                <v-card-text>Reason: {{ refunds?.reason }}</v-card-text>
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

<script setup>
  
  import { ref } from 'vue'

  const tab = ref(null)
  const route = useRoute();
  const query = gql`
  query NewQuery {
    customer {
      displayName
      id
      username
      role
      date
      refunds {
        nodes {
          amount
          date
          id
          reason
          title
          refundedBy {
            username
            name
            firstName
            lastName
            email
            locale
          }
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
    title: 'My Refunds',
  })

  definePageMeta({
	 // middleware: ['auth'],
	})
</script>