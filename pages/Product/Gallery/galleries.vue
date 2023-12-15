<template>
    <div class="contentPage">
        <v-toolbar title="Galleries" color="transparent"></v-toolbar>

        <v-row>
            <v-col cols="4">
                <a href="">
                    <v-card class="mx-auto" max-width="500" title="Showcase Title" subtitle="By Seller">
                        <v-container fluid>
                            <v-row dense>
                                <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                                    <v-card>
                                        <v-img :src="card.src" class="align-end"
                                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" cover>
                                            <v-card-title class="text-white">{{ card.title }}</v-card-title>
                                        </v-img>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn size="small" color="surface-variant" variant="text"
                                                icon="fas fa-heart">
                                            </v-btn>

                                            <v-btn size="small" color="surface-variant" variant="text"
                                                icon="fas fa-bookmark">
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>

                        <v-card-actions>
                            <v-btn color="orange">Add to Cart</v-btn>

                            <v-spacer></v-spacer>
                            <v-rating half-increments hover length="5" size="24" model-value="5" color="primary"
                                active-color="warning" />
                        </v-card-actions>
                    </v-card>
                </a>
            </v-col>
        </v-row>

    </div>
</template>

<script>
    export default {
        data: () => ({
            cards: [{
                    title: 'Pre-fab homes',
                    src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
                    flex: 12
                },
                {
                    title: 'Favorite road trips',
                    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
                    flex: 6
                },
                {
                    title: 'Best airlines',
                    src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
                    flex: 6
                },
            ],
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Galleries',
    })
</script>