<template>
  <div class="contentPage">
    <profilebar />
    <v-row>
      <v-col cols="12" v-for="(orders, index) in orders" :key="index">
        <v-card variant="text" :href="`/account/user/orders/my-order/${orders?.id}`">
          <v-toolbar>
            <v-row class="orderRow">
              <v-col>
                <v-list lines="two" class="orderToolbar">
                  <v-list-item-title>Order Placed</v-list-item-title>
                  <v-list-item-subtitle>{{ orders?.date_completed }}</v-list-item-subtitle>
                  <v-list-item-subtitle>Order Status: {{ orders?.status }}</v-list-item-subtitle>
                  <v-list-item-subtitle>Created By: {{ orders?.created_via }}</v-list-item-subtitle>
                </v-list>
              </v-col>

              <v-col>
                <v-list lines="two" class="orderToolbar">
                  <v-list-item-title>Total</v-list-item-title>
                  <v-list-item-subtitle>{{orders?.currency}} {{orders?.total}}</v-list-item-subtitle>
                </v-list>
              </v-col>

              <v-col>
                <v-list lines="two" class="orderToolbar">
                  <v-list-item-title>Ship To</v-list-item-title>
                  <v-list-item-subtitle>{{orders?.shipping?.address_1}} {{orders?.shipping?.city}}
                    {{orders?.shipping?.state}} {{orders?.shipping?.postcode}} {{orders?.shipping?.country}}
                  </v-list-item-subtitle>
                </v-list>
              </v-col>

              <v-col>
                <v-list lines="two" class="orderToolbar">
                  <v-list-item-title>Order # {{orders?.number}}</v-list-item-title>
                  <v-list-item-subtitle><a :href="`/account/user/orders/my-orders/${orders?.id}`">View order details</a>
                    | <a href="">View
                      Invoice</a></v-list-item-subtitle>
                </v-list>
              </v-col>
            </v-row>
          </v-toolbar>

          <v-card>
            <v-row>
              <v-col cols="3" v-for="items in orders?.nodes?.lineItems" :key="items">
                <v-avatar :image="`${items?.image?.sourceUrl}`" rounded="0" size="180"></v-avatar>
              </v-col>
              <v-col cols="9">
                <v-card-title>{{ orders?.line_items?.name }}</v-card-title>
                <v-card-subtitle>SKU: {{ orders?.line_items?.sku }}</v-card-subtitle>
                <v-card-subtitle>Quantity: {{ orders?.line_items?.quantity }}</v-card-subtitle>
                <v-card-subtitle>Total: {{orders?.line_items?.currency }} {{ orders?.line_items?.total }}</v-card-subtitle>
                <v-card-text>Payment Method: {{ orders?.line_items?.payment_method }} {{ orders?.payment_method_title }}</v-card-text>
                <v-card-actions>
                  <v-btn color="orange" prepend-icon="fas fa-repeat" variant="outlined">Buy it again</v-btn>
                  <v-btn variant="outlined" :href="`/product/${orders?.line_items?.id}`">View your item</v-btn>
                  <v-btn prepend-icon="fas fa-pencil" variant="outlined" :href="`/product/${orders?.line_items?.id}`">Write a product review</v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
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
  import {
    ref,
    onMounted
  } from 'vue';
  import {
    getOrders
  } from '~/composables/read/getOrders';

  const orders = ref([]);

  onMounted(async () => {
    orders.value = await getOrders();
  });

  useHead({
    title: 'My Orders',
  })

  definePageMeta({
    //middleware: ['auth-logged-in'],
  })
</script>~/server/api/read/getOrders