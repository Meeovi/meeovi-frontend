<template>
    <div>
        <sellerbar />
        <v-row>
            <v-col cols="4">
                <topproducts />
            </v-col>

            <v-col cols="4">
                <biggestcustomers />
            </v-col>

            <v-col cols="4">
                <topcategories />
            </v-col>

            <v-col cols="4">
                <lowestselling />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import sellerbar from '../../components/menus/sellerbar.vue'
import topproducts from '../../components/dashboard/topproducts.vue'
import biggestcustomers from '../../components/dashboard/biggestcustomers.vue'
import topcategories from '../../components/dashboard/topcategories.vue'
import lowestselling from '../../components/dashboard/lowestselling.vue'

export default {
    components: { sellerbar, topproducts, biggestcustomers, topcategories, lowestselling }
}
</script>

<script setup>
    useHead({
        title: 'Sellers Dashboard'
    })
</script>