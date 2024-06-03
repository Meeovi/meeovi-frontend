<template>
    <div class="contentPage">
        <profilebar />
        <v-row>
            <v-col cols="12">
                <v-toolbar title="Your Coupons" subtitle=""></v-toolbar>
                <v-row class="accountRow">
                    <v-col cols="3" v-for="(coupons, index) in data?.coupons?.nodes" :key="index">
                        <v-card class="mx-auto" max-width="400">
                            <v-card-title>{{coupons?.amount}}</v-card-title>

                            <v-card-subtitle class="pt-4">
                                <div>Description: {{ coupons?.description }}</div>

                                <div>Code: {{ coupons?.code }}</div>

                                <div>Minimum Amount: {{ coupons?.minimumAmount }}</div>

                                <div>Maximum Amount: {{ coupons?.maximumAmount }}</div>
                            </v-card-subtitle>

                            <v-card-text>
                                <div>Valid From: {{ coupons?.date }}</div>

                                <div>Valid Until: {{ coupons?.dateExpiry }}</div>

                                <div>How many times can be used: {{ coupons?.usageLimit }}</div>

                                <div>Discount Type: {{ coupons?.discountType }}</div>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn color="orange">
                                    Archive Order
                                </v-btn>

                                <v-btn color="red" :href="`/commerce/coupons/${coupons?.id}`">
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
                    <v-col cols="3" v-for="(coupons, index) in data?.coupons?.nodes" :key="index">
                        <v-card class="mx-auto" max-width="400">
                            <v-card-title>{{coupons?.amount}}</v-card-title>

                            <v-card-subtitle class="pt-4">
                                <div>Description: {{ coupons?.description }}</div>

                                <div>Minimum Amount: {{ coupons?.minimumAmount }}</div>

                                <div>Maximum Amount: {{ coupons?.maximumAmount }}</div>
                            </v-card-subtitle>

                            <v-card-text>
                                <div>Valid From: {{ coupons?.date }}</div>

                                <div>Valid Until: {{ coupons?.dateExpiry }}</div>

                                <div>How many times can be used: {{ coupons?.usageLimit }}</div>

                                <div>Discount Type: {{ coupons?.discountType }}</div>
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

<script>
    import profilebar from '../../components/menus/profilebar.vue'
    const productModel = ref(null)

    export default {
        components: {
            profilebar
        },
        data: () => ({
            model: null,
            url: process.env.DIRECTUS_URL,
        }),
        setup() {
            return {
                productModel,
            }
        },
    }
</script>

<script setup>
const route = useRoute();
const query = gql`
query NewQuery {
  coupons {
    nodes {
      amount
      code
      date
      dateExpiry
      description
      discountType
      freeShipping
      id
      individualUse
      minimumAmount
      maximumAmount
      usageLimit
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query);
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
	  middleware: ['auth-logged-in'],
	})
</script>