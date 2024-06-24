<template>
  <div class="contentPage">
    <profilebar />
    <section data-bs-version="5.1" class="features14 cid-u3U56NDZtd" id="features15-7o" data-sortbtn="btn-primary">
      <div class="container">
        <div class="row justify-content-center">
          <div class="card col-12 col-md-6 col-lg-3">
            <div class="card-wrapper">
              <span class="mbr-iconfont mobi-mbri-protect mobi-mbri m-auto"></span>
              <div class="card-box">
                <h4 class="card-title mbr-fonts-style mb-2 display-7"><strong>Ordered On</strong></h4>
                <h5 class="card-text mbr-fonts-style display-4">{{ new Date(order?.date_created).toLocaleDateString() }}
                </h5>
              </div>
            </div>
          </div>
          <div class="card col-12 col-md-6 col-lg-3">
            <div class="card-wrapper">
              <span class="mbr-iconfont m-auto mobi-mbri-website-theme-2 mobi-mbri"></span>
              <div class="card-box">
                <h4 class="card-title mbr-fonts-style mb-2 display-7"><strong>Order#</strong></h4>
                <h5 class="card-text mbr-fonts-style display-4">{{ order?.number }}</h5>
              </div>
            </div>
          </div>
          <div class="card col-12 col-md-6 col-lg-3">
            <div class="card-wrapper">
              <span class="mbr-iconfont m-auto mobi-mbri-features mobi-mbri"></span>
              <div class="card-box">
                <h4 class="card-title mbr-fonts-style mb-2 display-7">
                  <strong>View or Print Invoice</strong></h4>
                <h5 class="card-text mbr-fonts-style display-4"></h5>
              </div>
            </div>
          </div>

          <div class="card col-12 col-md-6 col-lg-3">
            <div class="card-wrapper">
              <span class="mbr-iconfont m-auto mobi-mbri-website-theme-2 mobi-mbri"></span>
              <div class="card-box">
                <h4 class="card-title mbr-fonts-style mb-2 display-7"><strong>Status</strong></h4>
                <h5 class="card-text mbr-fonts-style display-4">{{ order?.status }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section data-bs-version="5.1" class="contacts2 cid-u3U5tKf7Hq" id="contacts2-7p" data-sortbtn="btn-primary">
      <div class="container">

        <div class="row justify-content-center mt-4">
          <div class="card col-12 col-md-6">
            <div class="card-wrapper">
              <div class="image-wrapper">
                <span class="mbr-iconfont mobi-mbri-home mobi-mbri"></span>
              </div>
              <div class="text-wrapper">
                <h6 class="card-title mbr-fonts-style mb-1 display-5">
                  <strong>Shipping Address</strong></h6>
                <p class="mbr-text mbr-fonts-style display-7">{{ order?.shipping?.first_name }}
                  {{ order?.shipping?.last_name }} / {{ order?.shipping?.company }}</p>
                <p class="mbr-text mbr-fonts-style display-7">{{ order?.shipping?.address_1 }}
                  {{ order?.shipping?.address_2 }} {{ order?.shipping?.city }} {{ order?.shipping?.state }}
                  {{ order?.shipping?.postcode }} {{ order?.shipping?.country }}</p>
              </div>
            </div>
          </div>
          <div class="card col-12 col-md-6">
            <div class="card-wrapper">
              <div class="image-wrapper">
                <span class="mbr-iconfont mobi-mbri-cash mobi-mbri"></span>
              </div>
              <div class="text-wrapper">
                <h6 class="card-title mbr-fonts-style mb-1 display-5">
                  <strong>Payment Method</strong></h6>
                <p class="mbr-text mbr-fonts-style display-7">
                  <a href="mailto:info@site.com" class="text-primary">{{ order?.payment_method }}
                    {{ order?.payment_method_title }}</a>
                </p>
              </div>
            </div>
          </div>
          <div class="card col-12 col-md-6">
            <div class="card-wrapper">
              <div class="image-wrapper">
                <span class="mbr-iconfont mobi-mbri-contact-form mobi-mbri"></span>
              </div>
              <div class="text-wrapper">
                <h6 class="card-title mbr-fonts-style mb-1 display-5">
                  <strong>Order Summary</strong></h6>
                <p class="mbr-text mbr-fonts-style display-7">{{ order?.total }}</p>
                <p class="mbr-text mbr-fonts-style display-7">Date Paid: {{ order?.date_paid }}</p>
                <p class="mbr-text mbr-fonts-style display-7">Date Completed: {{ order?.date_completed }}</p>
              </div>
            </div>
          </div>
          <div class="card col-12 col-md-6">
            <div class="card-wrapper">
              <div class="image-wrapper">
                <span class="mbr-iconfont mobi-mbri-bulleted-list mobi-mbri"></span>
              </div>
              <div class="text-wrapper">
                <h6 class="card-title mbr-fonts-style mb-1 display-5">
                  <strong>Transactions</strong></h6>
                <p class="mbr-text mbr-fonts-style display-7">
                  Tracking #: {{ order?.shipments?.tracking?.number }}
                  <br> Shipping Carrier: {{ order?.shipping_lines?.method_title }}
                  <br> Shipping Total: {{ order?.shipping_lines?.total }}
                  <br> Shipping Tax: {{ order?.shipping_lines?.total_tax }}
                  <br> Payment Method: {{ order?.payment_method }} ending in {{ order?.payment_method_title }}:
                  {{ order?.total }}
                  <br>
                  <br>Grand Total: {{ order?.total }}</p>
              </div>
            </div>
          </div>

          <h4>Products in Order</h4>
          <v-row>
            <v-col cols="12" v-for="(item, index) in order?.line_items" :key="index">
              <v-card>
                <v-row>
                  <v-col cols="3">
                    <v-avatar :image="`${items?.image?.sourceUrl}`" rounded="0" size="180"></v-avatar>
                  </v-col>
                  <v-col cols="9">
                    <v-card-title>{{ items?.name }}</v-card-title>
                    <v-card-subtitle>SKU: {{ items?.sku }}</v-card-subtitle>
                    <v-card-subtitle>Quantity: {{ items?.quantity }}</v-card-subtitle>
                    <v-card-subtitle>Total: {{items?.currency }} {{ items?.price }}
                    </v-card-subtitle>
                    <v-card-text>Payment Method: {{ items?.payment_method }}
                      {{ order?.payment_method_title }}</v-card-text>
                    <v-card-actions>
                      <v-btn color="orange" prepend-icon="fas fa-repeat" variant="outlined">Buy it again</v-btn>
                      <v-btn variant="outlined" :href="`/product/${items?.id}`">View your item</v-btn>
                      <v-btn prepend-icon="fas fa-pencil" variant="outlined"
                        :href="`/product/${items?.id}`">Write a product review</v-btn>
                    </v-card-actions>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import profilebar from '../../../../../components/menus/profilebar.vue'

  export default {
    components: { profilebar },
    data: () => ({

    }),
  }
</script>

<script setup>
  import {
    getOrderById
  } from '~/composables/read/getOrders';

  const order = ref(null);
  const route = useRoute();

  onMounted(async () => {
    const id = route.params.id;
    order.value = await getOrderById(id);
  });

  useHead({
    title: `Order Number ${route?.params?.id}`,
  })

  definePageMeta({
    //middleware: ['auth-logged-in'],
  })
</script>~/server/api/read/getOrders