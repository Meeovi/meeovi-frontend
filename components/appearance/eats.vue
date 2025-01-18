<template>
    <div>
        <v-toolbar :title="`Meeovi ${categoryEats?.name}`" :color="categoryEats?.color" :style="`color: ${categoryEats?.colortext}; font: bold;`"></v-toolbar>
        <v-row>
            <v-col cols="12" v-for="(eats, index) in eats" :key="index">
                <shorts :short="eats" />
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
    import shorts from '~/components/cms/related/shorts.vue'
    //import share from '~/components/partials/share.vue'

    const {
        $directus,
        $readItems,
        $readItem
    } = useNuxtApp()

    const {
        data: eats
    } = await useAsyncData('eats', () => {
        return $directus.request($readItems('shorts', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    const {
        data: categoryEats
    } = await useAsyncData('categoryEats', () => {
        return $directus.request($readItem('categories', '152', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })
</script>