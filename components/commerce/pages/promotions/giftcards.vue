<template>
    <div>
        <!--<profilebar />-->
        <v-row>
            <v-col cols="12">
                <v-toolbar title="Your Gift Cards" subtitle=""></v-toolbar>
                <v-row class="accountRow">
                    <v-col cols="3" v-for="(card, index) in cards" :key="index">
                        <v-card class="mx-auto" max-width="400">
                            <img class="align-end text-white" height="200"
                                :src="card?.giftCardFields.image?.node?.sourceUrl" :alt="card?.giftCardFields.name"
                                cover />
                            <v-card-title>{{card?.giftCardFields.name}}</v-card-title>

                            <v-card-subtitle class="pt-4">
                                Value: {{ card?.giftCardFields.amount }}
                            </v-card-subtitle>

                            <v-card-text>
                                <div v-for="manufacturer in card?.manufacturer?.nodes" :key="manufacturer">Company:
                                    {{ card?.manufacturerFields?.name }}</div>

                                <div>Released: {{ new Date(card?.date).toLocaleDateString() }}</div>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn color="orange">
                                    Archive Gift Card
                                </v-btn>

                                <v-btn color="red" :href="`/commerce/giftcard/${card?.id}`">
                                    Manage Gift Card
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="12">
                <v-toolbar title="Available Gift Cards" subtitle=""></v-toolbar>
                <v-row class="accountRow">
                    <v-col cols="3" v-for="(card, index) in cards" :key="index">
                        <v-card class="mx-auto" max-width="400">
                            <img class="align-end text-white" height="200"
                                :src="card?.giftCardFields.image?.node?.sourceUrl" :alt="card?.giftCardFields.name"
                                cover />
                            <v-card-title>{{card?.giftCardFields.name}}</v-card-title>

                            <v-card-subtitle class="pt-4">
                                Value: {{ card?.giftCardFields.amount }}
                            </v-card-subtitle>

                            <v-card-text>
                                <div v-for="manufacturer in card?.manufacturer?.nodes" :key="manufacturer">Company:
                                    {{ card?.manufacturerFields?.name }}</div>

                                <div>Released: {{ new Date(card?.date).toLocaleDateString() }}</div>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn color="red" :href="`/commerce/giftcard/${card?.id}`">
                                    Buy Gift Card
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        components: {
            profilebar
        },
        data: () => ({
            model: null,
            //url: process.env.DIRECTUS_URL,
        }),
    }
</script>

<script setup>
    import profilebar from '~/components/menus/profilebar.vue'

    import {
        ref,
        onMounted
    } from 'vue';
    import {
        getCards
    } from '~/composables/commerce/marketing/getGiftCards';

    const cards = ref([]);

    onMounted(async () => {
        cards.value = await getCards();
    });

    /* const {
       getItems
     } = useDirectusItems()

     const card = await getItems({
       collection: "gift_card",
     });*/

    useHead({
        title: 'Gift Cards',
    })

    definePageMeta({
        //middleware: ['auth'],
    })
</script>