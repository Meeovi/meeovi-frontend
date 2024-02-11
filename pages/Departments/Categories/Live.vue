<template>
    <div class="contentPage">
        <v-toolbar title="Meeovi Live" color="orange"></v-toolbar>
        <v-row class="livefeed">
            <v-col cols="4" v-for="shorts in shorts" :key="shorts.id">
                <div class="text-center">
                        <v-dialog v-model="dialog" width="auto">
                            <template v-slot:activator="{ props }" v-for="(shorts, index) in shorts.customers"
                                :key="index">
                                <v-avatar v-bind="props" size="70"
                                    v-if="shorts.customers && shorts.customers.customers_id">
                                    <img :src="`${url}assets/${shorts.customers.customers_id.image.filename_disk}`" :alt="shorts.customers.customers_id.username" cover />
                                </v-avatar>
                            </template>

                            <v-card min-width="500" min-height="500">
                                <livesingle />

                                <v-card-actions>
                                    <v-btn color="primary" block @click="dialog = false">Close</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import livesingle from '../../components/Catbar/livesingle.vue'

    export default {
        components: { livesingle },
        data() {
            return {
                dialog: false,
                url: process.env.DIRECTUS_URL,
            }
        },
    }
</script>

<script setup>
/*import query from '../../apollo/queries-mutations_subscriptions/queries/shorts.js'

const { data } = await useAsyncQuery(query)*/

const { getItems } = useDirectusItems()

const shorts = await getItems({ collection: "shorts"}); 

    useHead({
        title: 'Meeovi Shorts',
    })
</script>