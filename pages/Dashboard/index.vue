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
import sellerbar from '../../components/Menus/sellerbar.vue'
import topproducts from '../../components/Dashboard/topproducts.vue'
import biggestcustomers from '../../components/Dashboard/biggestcustomers.vue'
import topcategories from '../../components/Dashboard/topcategories.vue'
import lowestselling from '../../components/Dashboard/lowestselling.vue'

export default {
    components: { sellerbar, topproducts, biggestcustomers, topcategories, lowestselling }
}
</script>

<script setup>
    useHead({
        title: 'Sellers Dashboard'
    })
</script>