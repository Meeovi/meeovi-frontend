<template>
    <div class="contentPage">
        <v-toolbar :style="`background-color: ${chart?.color}`" :title="chart?.name"></v-toolbar>
        <v-table class="charttable">
            <thead>
                <tr>
                    <th></th>
                    <th class="text-left">
                        This Week
                    </th>
                    <th class="text-left">Name</th>
                    <th class="text-left">
                        Award
                    </th>
                    <th class="text-left">
                        Last Week
                    </th>
                    <th class="text-left">
                        Peak Position
                    </th>
                    <th class="text-left">
                        Weeks on Chart
                    </th>
                    <th class="text-left">
                        Buy
                    </th>
                    <th class="text-left"><share /></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(products, index) in chart?.products?.products_id" :key="index">
                    <td class="chartnumber">
                        <h1>{{ chart?.thisWeek }}</h1>
                    </td>
                    <td>
                        <v-avatar :image="products?.image?.filename_disk" rounded="0" size="130"></v-avatar>
                    </td>
                    <td>
                        <v-list>
                            <v-list-item>
                                <v-list-item-title>{{ products?.name }}</v-list-item-title>
                                <div v-for="product in products?.product_types?.product_types_id" :key="product">
                                  <v-list-item-subtitle>{{ product?.name }}</v-list-item-subtitle>  
                                </div>
                            </v-list-item>
                        </v-list>
                    </td>
                    <td>
                        <v-avatar icon="fas fa-star" :style="`color: ${chart?.award}`"></v-avatar>
                    </td>
                    <td>
                        <h5>{{ chart?.last_week }}</h5>
                    </td>
                    <td>
                        <h5>{{ chart?.peak_position }}</h5>
                    </td>
                    <td>
                        <h5>{{ chart?.weeks_on_chart }}</h5>
                    </td>
                    <td>
                        <v-btn href="" icon="fas fa-shopping-cart"></v-btn>
                    </td>
                </tr>
            </tbody>
        </v-table>
        <relatedchart />
        <relatedproducts /><!---->
        <recentlyviewed /><!---->
    </div>
</template>

<script setup>
    import share from '~/components/partials/globals/share.vue'
    import relatedchart from '~/components/charts/relatedcharts.vue'
    import relatedproducts from '~/components/product/relatedproducts.vue'
    import recentlyviewed from '~/components/product/recentlyviewed.vue'


useHead({
    title: computed(() => chart?.value?.name || 'Chart Page')
  });
</script>