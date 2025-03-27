<template>
    <div>
        <v-card elevation="0" style="min-height: 100vh !important;">
            <v-layout>
                <v-main>
                    <v-tabs center-active v-model="tab" bg-color="transparent">
                        <div v-for="(menu, index) in dealbar?.menus" :key="index">
                    <v-tab :value="menu?.value">{{ menu?.name }}</v-tab>
                </div>
                    </v-tabs>

                    <v-card-text>
                        <v-tabs-window v-model="tab">
                            <v-tabs-window-item :value="dealbar?.menus[0]?.value">
                                <v-row>
                                    <v-col cols="3" v-for="products in result?.products?.items" :key="products">
                                        <productCard :product="products" />
                                    </v-col>
                                </v-row>
                            </v-tabs-window-item>

                            <v-tabs-window-item :value="dealbar?.menus[1]?.value">
                                <v-row>
                                    <v-col cols="3" v-for="products in dollar?.products?.items" :key="products">
                                        <productCard :product="products" />
                                    </v-col>
                                </v-row>
                            </v-tabs-window-item>
                        </v-tabs-window>
                    </v-card-text>
                </v-main>
            </v-layout>
        </v-card>
    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    import {
    useQuery
    } from '@vue/apollo-composable'
    import productCard from '~/components/product/productCard.vue'
    import { deals } from '~/graphql/commerce/queries/deals'
    import dollarland from '~/graphql/commerce/queries/dollarland'

    const {
        $directus,
        $readItem,
    } = useNuxtApp()

    const {
    result
    } = useQuery(deals)

    const {
    result: dollar
    } = useQuery(dollarland)

    const {
        data: dealbar
    } = await useAsyncData('dealbar', () => {
        return $directus.request($readItem('navigation', '49', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    const tab = ref(null)
    const props = defineProps({
        category: {
            type: Number,
            required: true,
        },
    });

    useHead({
        title: 'Deals',
    })
</script>