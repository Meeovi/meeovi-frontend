<template>
    <div v-if="product.length">
        <h1>Wishlists</h1>

        <v-row>
            <v-col cols="3">
                <productCard v-for="product in product" :key="product.id" :product="product" />
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
    import productCard from '~/components/product/productCard.vue'


</script>