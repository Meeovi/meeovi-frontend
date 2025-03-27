<template>
    <div class="contentPage">
        <v-row>
            <v-col cols="12">
                <v-card :color="chartbar?.color">
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title class="text-h5">
                                {{ chart?.name }}
                            </v-card-title>

                            <v-card-subtitle>{{ chart?.description }}</v-card-subtitle>
                        </div>

                        <v-avatar class="ma-3" rounded="0" size="125">
                            <NuxtImg :src="`${$directus.url}assets/${chart?.image?.filename_disk}`" />
                        </v-avatar>
                    </div>
                </v-card>
            </v-col>

            <v-col cols="12">
                <v-card elevation="0">
                    <v-tabs v-model="tab" :bg-color="chartbar?.color">
                        <div v-for="(menu, index) in spacebar?.menus" :key="index">
                            <v-tab :value="menu?.value">{{ menu?.name }}</v-tab>
                        </div>
                    </v-tabs>

                    <v-card-text>
                        <v-tabs-window v-model="tab">
                            <v-tabs-window-item :value="chartbar?.menus[0]?.value">
                                <!-- Weekly Chart Table -->
                                <WeeklyChart :data="topProducts" />
                            </v-tabs-window-item>
                            <v-tabs-window-item :value="chartbar?.menus[1]?.value">
                                <!-- Monthly Chart Table -->
                                <MonthlyChart :data="topProducts" />
                            </v-tabs-window-item>
                            <v-tabs-window-item :value="chartbar?.menus[2]?.value">
                                <!-- Yearly Chart Table -->
                                <YearlyChart :data="topProducts" />
                            </v-tabs-window-item>

                            <v-tabs-window-item :value="chartbar?.menus[3]?.value">
                                <v-row>
                                    <v-col v-for="charts in charts" :key="charts">
                                        <charts :chart="charts" />
                                    </v-col>
                                </v-row>
                            </v-tabs-window-item>
                        </v-tabs-window>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
    import {
        ref,
        computed
    } from 'vue'
    import WeeklyChart from '@/components/charts/weeklyChart.vue'
    import MonthlyChart from '@/components/charts/monthlyChart.vue'
    import YearlyChart from '@/components/charts/yearlyChart.vue'

    const tab = ref('weekly')
    const route = useRoute()
    const topProducts = ref([]);

    // Add new reactive references
    const filterOptions = ref({
        category: null,
        timeRange: 'weekly'
    })

    const sortOptions = ref({
        field: 'sales',
        order: 'desc'
    })

    const {
        $directus,
        $readItem,
        $readItems
    } = useNuxtApp()

    const {
        data: chart
    } = await useAsyncData('chart', () => {
        return $directus.request($readItem('musicchart', route.params.id, {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    const {
        data: charts
    } = await useAsyncData('charts', () => {
        return $directus.request($readItems('musicchart', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    const {
        data: chartbar
    } = await useAsyncData('chartbar', () => {
        return $directus.request($readItem('navigation', '53'))
    })

    const categories = ref([]) // Will be populated from your products data

    // Calculate helper functions
    const calculateTrend = (current, previous) => {
        if (current > previous) return 'up';
        if (current < previous) return 'down';
        return 'stable';
    };

    const calculateWeeksOnChart = (firstAppearance) => {
        const now = new Date();
        const start = new Date(firstAppearance);
        return Math.floor((now - start) / (7 * 24 * 60 * 60 * 1000));
    };

    // Modify your existing fetchChartData function
    const fetchChartData = async (timeframe) => {
        try {
            const now = new Date();
            let startDate;

            // Determine the start date based on the timeframe
            if (timeframe === "weekly") {
                startDate = new Date(now.setDate(now.getDate() - 7));
            } else if (timeframe === "monthly") {
                startDate = new Date(now.getFullYear(), now.getMonth(), 1);
            } else if (timeframe === "yearly") {
                startDate = new Date(now.getFullYear(), 0, 1);
            }

            const {
                data
            } = await useAsyncData("productChart", () => {
                return $directus.request(
                    $readItems("products", {
                        sort: ["-sales"],
                        limit: 100,
                        filter: {
                            created_on: {
                                _gte: startDate.toISOString(),
                            },
                        },
                    })
                );
            });

            // Process the data and calculate fields
            const processedData = data.value.map((product) => ({
                ...product,
                trend: calculateTrend(product.currentSales, product.previousSales),
                weeksOnChart: calculateWeeksOnChart(product.firstAppearance),
            }));

            // Update top products and categories
            topProducts.value = processedData;
            categories.value = [...new Set(processedData.map((p) => p.category))];
        } catch (error) {
            console.error("Error fetching chart data:", error);
        }
    };

    // Watch for tab changes to update data
    watch(tab, (newValue) => {
        fetchChartData(newValue);
    });

    // Filter and sort products
    const sortedAndFilteredProducts = computed(() => {
        let filtered = [...topProducts.value];

        if (filterOptions.value.category) {
            filtered = filtered.filter(
                (product) => product.category === filterOptions.value.category
            );
        }

        return filtered.sort((a, b) => {
            const aValue = a[sortOptions.value.field];
            const bValue = b[sortOptions.value.field];

            return sortOptions.value.order === 'asc' ?
                aValue - bValue :
                bValue - aValue;
        });
    });

    watch(tab, (newValue) => {
        fetchChartData(newValue);
    });

    // Set page title
    useHead({
        title: computed(() => chart.value?.name || 'Chart Page'),
    });
</script>

<style scoped>
    /* Keep existing styles */

    /* Add animation styles */
    .product-row {
        transition: all 0.3s ease-in-out;
    }

    .position-changed {
        animation: highlightRow 1s ease-in-out;
    }

    @keyframes highlightRow {
        0% {
            background-color: rgba(var(--v-theme-primary), 0.1);
        }

        100% {
            background-color: transparent;
        }
    }

    .position-change-enter-active,
    .position-change-leave-active {
        transition: all 0.3s ease;
    }

    .position-change-enter-from,
    .position-change-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }

    /* Add smooth transitions for sorting */
    .v-table tbody tr {
        transition: transform 0.3s ease;
    }

    /* Add hover effect */
    .product-row:hover {
        background-color: rgba(var(--v-theme-primary), 0.05);
    }
</style>