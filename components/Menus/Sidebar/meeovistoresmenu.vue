<template>
    <div>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel title="Meeovi Stores" expand-icon="fas fa-plus" collapse-icon="fas fa-minus" elevation="0">
                <v-expansion-panel-text>
                    <div v-for="stores in meeovistores" :key="stores.id">
                        <v-list-item :title="stores.name" :value="stores.name"
                            :href="`/stores/${stores.id}`">
                        </v-list-item>
                    </div>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
    import meeovistores from '../../../apollo/queries-mutations_subscriptions/queries/meeovistores.gql'

    export default {
        data: () => ({
            model: null,
            url: process.env.DIRECTUS_URL,
            meeovistores: [],
        }),
        apollo: {
            meeovistores: {
                prefetch: true,
                query: meeovistores
            }
        },
    }
</script>

<script setup>
import query from '../../../apollo/Queries/meeovistores.js'

const { data } = await useAsyncQuery(query)

  /*  const {
        getItems
    } = useDirectusItems()

    const stores = await getItems({
        collection: "stores"
    });*/    
</script>