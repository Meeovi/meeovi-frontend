<template>
    <div class="contentPage">
        <v-row>
            <v-col cols="6">
                <productPageGallery /><!---->
            </v-col>
            <v-col cols="6">
                <productDetails />
            </v-col>

            <v-col cols="12">
                <productInfo />
            </v-col>

            <v-col cols="12">
                <relatedproducts />
            </v-col>

            <v-col cols="12">
                <recentlyviewed />
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
    import productPageGallery from '../../components/Pages/commerce/productPageGallery.vue'
    import productDetails from '../../components/Pages/commerce/productDetails.vue'
    import productInfo from '../../components/Pages/commerce/productInfo.vue'
    import relatedproducts from '../../components/Related/relatedproducts.vue'
    import recentlyviewed from '../../components/Related/recentlyviewed.vue'

    export default {
        components: {
            productPageGallery,
            productDetails,
            productInfo,
            relatedproducts,
            recentlyviewed
        }
    }
</script>

<script lang="ts" setup>

</script>