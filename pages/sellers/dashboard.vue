<template>
    <div>
      <v-row>
        <v-col cols="6"><biggestcustomers /></v-col>

        <v-col cols="6"><lowestselling /></v-col>

        <v-col cols="6"><topcategories /></v-col>

        <v-col cols="6"><topproducts /></v-col>
      </v-row>
    </div>
</template>

<script setup>
import biggestcustomers from '~/components/vendor/sales/biggestcustomers.vue'
import lowestselling from '~/components/vendor/sales/lowestselling.vue'
import topcategories from '~/components/vendor/sales/topcategories.vue'
import topproducts from '~/components/vendor/sales/topproducts.vue'
    import {
        ref
    } from 'vue'

    const tab = ref(null);

    const {
        $directus,
        $readItem
    } = useNuxtApp()
    const route = useRoute()

    const {
        data: seller
    } = await useAsyncData('seller', () => {
        return $directus.request($readItem('navigation', '14'))
    })

    definePageMeta({
        layout: "sellers",
        middleware: ['auth'],
    });

    useHead({
        title: 'Sellers Dashboard'
    })
</script>