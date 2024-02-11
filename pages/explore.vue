<template>
    <v-card class="contentPage" variant="text">
        <v-tabs v-model="tab" bg-color="primary">
            <v-tab value="one">Explore</v-tab>
            <v-tab value="two">Leaderboard</v-tab>
            <v-tab value="three">Brands</v-tab>
            <v-tab value="four">Challenges</v-tab>
        </v-tabs>

        <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="one">
                    <explore />
                </v-window-item>

                <v-window-item value="two">
                    <leaderboard />
                </v-window-item>

                <v-window-item value="three">
                    <brands />
                </v-window-item>

                <v-window-item value="four">
                    <challenges />
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>

<script>
import explore from '../components/Pages/explore/explore.vue'
import leaderboard from '../components/Pages/explore/leaderboard.vue'
import brands from '../components/Pages/explore/brands.vue'
import challenges from '../components/Pages/explore/challenges.vue'

    export default {
        components: { explore, leaderboard, brands, challenges },
        data: () => ({
            tab: null,
        }),
    }
</script>

<script setup>

    useHead({
        title: 'Explore'
    })
</script>