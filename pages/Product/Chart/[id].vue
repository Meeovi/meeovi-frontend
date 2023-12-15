<template>
    <div class="contentPage">
        <v-toolbar color="transparent" title="Chart Name"></v-toolbar>
        <v-table class="charttable">
            <thead>
                <tr>
                    <th></th>
                    <th class="text-left">
                        This Week
                    </th>
                    <th class="text-left"></th>
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
                    <th class="text-left">Share</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="chartnumber">
                        <h1>1</h1>
                    </td>
                    <td>
                        <v-avatar image="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg" rounded="0" size="130"></v-avatar>
                    </td>
                    <td>
                        <v-list>
                            <v-list-item title="Product Title" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"></v-list-item>
                        </v-list>
                    </td>
                    <td>
                        <v-avatar icon="fas fa-star" color="blue"></v-avatar>
                    </td>
                    <td>
                        <h5>1</h5>
                    </td>
                    <td>
                        <h5>1</h5>
                    </td>
                    <td>
                        <h5>1</h5>
                    </td>
                    <td>
                        <v-btn href="" icon="fas fa-shopping-cart"></v-btn>
                    </td>
                </tr>
            </tbody>
        </v-table>
        <relatedchart />
        <!--<relatedproducts />-->
        <!--<recentlyviewed />-->
    </div>
</template>

<script>
    import relatedchart from '../../../components/Related/relatedcharts.vue'
    import relatedproducts from '../../../components/Related/relatedproducts.vue'
    import recentlyviewed from '../../../components/Related/recentlyviewed.vue'

    export default {
        components: {
            relatedchart,
            relatedproducts,
            recentlyviewed
        },
    }
</script>

<script setup>
    useHead({
        title: '',
    })
</script>