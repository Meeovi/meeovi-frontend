<template>
    <v-table fixed-header>
        <thead>
            <tr>
                <th class="text-left">Position</th>
                <th class="text-left">Product</th>
                <th class="text-left">Sales</th>
                <th class="text-left">Last Week</th>
                <th class="text-left">Peak Position</th>
                <th class="text-left">Weeks on Chart</th>
                <th class="text-left">Trend</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(product, index) in data" :key="product.id">
                <td>{{ index + 1 }}</td>
                <td>
                    <div class="d-flex align-center">
                        <v-img :src="product.image" width="50" height="50" class="mr-3" />
                        <div>
                            <div class="font-weight-bold">{{ product.name }}</div>
                            <div class="text-caption">{{ product.category }}</div>
                        </div>
                    </div>
                </td>
                <td>{{ product.sales }}</td>
                <td>
                    <v-chip :color="getPositionColor(product.lastWeek, index + 1)" size="small">
                        {{ product.lastWeek }}
                    </v-chip>
                </td>
                <td>{{ product.peakPosition }}</td>
                <td>{{ product.weeksOnChart }}</td>
                <td>
                    <v-icon :color="getTrendColor(product.trend)">{{ getTrendIcon(product.trend) }}</v-icon>
                </td>
            </tr>
        </tbody>
    </v-table>
</template>

<script setup>
    defineProps({
        data: Array, // Accepts the chart data
    });
</script>