<template>
    <div>
        <!---->
        <v-row>
            <v-col cols="12">
                <v-toolbar title="Your Coupons" subtitle=""></v-toolbar>
                <v-row class="accountRow">
                    <v-col cols="3" v-for="(coupons, index) in coupons" :key="index">
                        <v-card class="mx-auto" max-width="400">
                            <v-card-title>{{coupons?.code}}</v-card-title>

                            <v-card-subtitle class="pt-4">
                                <div>Amount: {{ coupons?.amount }}</div>

                                Description: <div v-html="coupons?.description"></div>

                                <div>Minimum Amount: {{ coupons?.minimum_amount }}</div>

                                <div>Maximum Amount: {{ coupons?.maximum_amount }}</div>
                            </v-card-subtitle>

                            <v-card-text>
                                <div>Date Created: {{ new Date(coupons?.date_created).toLocaleDateString() }}</div>

                                <div>Valid Until: {{ new Date(coupons?.date_expires).toLocaleDateString() }}</div>

                                <div>How many times can be used: {{ coupons?.usageLimit }}</div>

                                <div>Discount Type: {{ coupons?.discount_type }}</div>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn color="red" :href="`/commerce/coupon/${coupons?.id}`">
                                    Manage coupon
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="12">
                <v-toolbar title="Available Coupons" subtitle=""></v-toolbar>
                <v-row class="accountRow">
                    <v-col cols="3" v-for="(coupons, index) in coupons" :key="index">
                        <v-card class="mx-auto" max-width="400">
                            <v-card-title>{{coupons?.code}}</v-card-title>

                            <v-card-subtitle class="pt-4">
                                <div>Amount: {{ coupons?.amount }}</div>

                                Description: <div v-html="coupons?.description"></div>

                                <div>Minimum Amount: {{ coupons?.minimum_amount }}</div>

                                <div>Maximum Amount: {{ coupons?.maximum_amount }}</div>
                            </v-card-subtitle>

                            <v-card-text>
                                <div>Date Created: {{ new Date(coupons?.date_created).toLocaleDateString() }}</div>

                                <div>Valid Until: {{ new Date(coupons?.date_expires).toLocaleDateString() }}</div>

                                <div>How many times can be used: {{ coupons?.usageLimit }}</div>

                                <div>Discount Type: {{ coupons?.discount_type }}</div>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn color="red">
                                    Add to Cart
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
  import {
    ref,
    onMounted
  } from 'vue';
  import {
    getCoupons
  } from '~/composables/commerce/marketing/getCoupons';
      

    const model = ref(null)
  const coupons = ref([]);

  onMounted(async () => {
    coupons.value = await getCoupons();
  });
/*  const {
    getItems
  } = useDirectusItems()

  const coupons = await getItems({
    collection: "coupons",
  });*/

    useHead({
        title: 'Coupons',
    })

    definePageMeta({
	  middleware: ['authenticated'],
	})
</script>