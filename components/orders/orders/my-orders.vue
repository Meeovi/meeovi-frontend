<template>
  <div>
      <!---->
      <section data-bs-version="5.1" class="firmm4_features1 features1 cid-uhBuptnWmV" id="features1-9v"
          data-sortbtn="btn-primary">
          <div class="container-fluid">
              <div class="row">
                  <div class="col-12 title_block">
                      <h3 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                          <strong>Orders</strong></h3>
                  </div>
              </div>
              <div class="row justify-content-center">
                  <div class="card col-12 col-lg-3 col-md-6 col-sm-6" v-for="(order, index) in orders"
                      :key="index">
                      <div class="card_wrapper">
                          <div class="card-box">
                              <div class="icon_block">
                                  <div class="iconfont-wrapper">
                                      <span class="mbr-iconfont mobi-mbri-cart-full mobi-mbri"></span>
                                  </div>
                              </div>
                              <p class="card-text mbr-fonts-style display-4">ID: {{ order?.ext_customer_id }}</p>
                              <p class="card-text mbr-fonts-style display-4">Purchase Point: {{ new Date(order?.created_at).toLocaleDateString() }}</p>
                              <p class="card-text mbr-fonts-style display-4">Bill to Name: {{ order?.customer_firstname }} {{ order?.customer_lastname }}</p>
                              <p class="card-text mbr-fonts-style display-4">Ship to Name: {{ order?.customer_firstname }} {{ order?.customer_lastname }}</p>
                              <p class="card-text mbr-fonts-style display-4">Grand Total (Base): {{ order?.base_grand_total }}</p>
                              <p class="card-text mbr-fonts-style display-4">Grand Total (Purchased): {{ order?.grand_total }}</p>
                              <p class="card-text mbr-fonts-style display-4">Status: {{ order?.status }}</p>
                              <p class="btn_link mbr-fonts-style display-4"><NuxtLink :to="`/account/user/order/${order?.id}`"
                                      class="text-secondary">View<span
                                          class="mobi-mbri mobi-mbri-right mbr-iconfont"></span></NuxtLink></p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  </div>
</template>

<script setup>
  

  import {
      ref,
      onMounted
  } from 'vue';
  import {
      getOrders
  } from '~/composables/commerce/sales/getOrders';

  const orders = ref([]);
  const model = ref(null)

  onMounted(async () => {
      orders.value = await getOrders();
  });
  /*  const {
      getItems
    } = useDirectusItems()

    const coupons = await getItems({
      collection: "coupons",
    });*/

  useHead({
      title: 'Orders',
  })

  definePageMeta({
      middleware: ['authenticated'],
  })
</script>