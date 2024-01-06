<template>
    <div class="contentPage">
        <profilebar />
        <v-row>
            <v-col cols="12" v-for="payments in payments" :key="payments">
                <v-sheet class="mx-auto sliderProducts">
                    <v-toolbar color="transparent">
                        <v-toolbar-title>Payment Method {{ payments.payment_method }}</v-toolbar-title>
                        <p>Status: {{ payments.status }}</p>
                        <p>Amount: {{ payments.amount }}</p>
                        <p>Transaction ID: {{ payments.transaction_id }}</p>
                    </v-toolbar>
                    <v-slide-group v-model="model" class="pa-4">
                        <v-slide-group-item v-for="payments in payments.order" :key="payments.id"
                            v-slot="{ isSelected, toggle }">
                            <v-card @click="toggle">
                                <v-slide-group v-model="productModel" class="pa-4">
                                    <v-slide-group-item v-for="(product, productIndex) in order.items"
                                        :key="productIndex" v-slot="{ isSelected, toggle }">
                                        <v-card class="ma-4" height="580" @click="toggle">
                                            <img class="align-end text-white" height="280"
                                                :src="`${url}assets/${product.products_id.image.filename_disk}`"
                                                :alt="product.products_id.name" cover />

                                            <v-card-title class="pt-4">
                                                {{ product.products_id.name }}
                                            </v-card-title>

                                            <v-card-text>
                                                <div>Sku: {{ product.products_id.sku }}</div>
                                                <div>Category: {{ payments.categories[0].categories_id.name }}</div>
                                            </v-card-text>

                                            <v-card-actions>
                                                <v-card-title>$ {{ product.products_id.price }}</v-card-title>
                                            </v-card-actions>

                                            <div class="align-center">
                                                <v-btn class="align-center" color="orange" href="">Add to Cart</v-btn>
                                            </div>

                                            <div class="d-flex fill-height align-center justify-center">
                                                <v-scale-transition>
                                                    <v-icon v-if="isSelected" color="white" size="48"
                                                        icon="fas fa-circle-xmark"></v-icon>
                                                </v-scale-transition>
                                            </div>
                                        </v-card>
                                    </v-slide-group-item>
                                </v-slide-group>
                            </v-card>
                        </v-slide-group-item>
                    </v-slide-group>
                </v-sheet>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import profilebar from '../../components/Menus/profilebar.vue'

    export default {
        components: {
            profilebar
        },
        data: () => ({
            model: null,
            url: process.env.DIRECTUS_URL,
        }),
    }
</script>

<script setup>
  const {
        getItems
    } = useDirectusItems()

    const payments = await getItems({
        collection: "payments",
    });

    useHead({
        title: 'Payments',
    })
</script>