<template>
    <v-card class="contentPage">
        <v-tabs v-model="tab" bg-color="primary">
            <v-tab value="one">Explore</v-tab>
            <v-tab value="two">Leaderboard</v-tab>
            <v-tab value="three">Collections</v-tab>
            <v-tab value="four">Journals</v-tab>
            <v-tab value="five">Challenges</v-tab>
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
                    <collections />
                </v-window-item>

                <v-window-item value="four">
                    <journals />
                </v-window-item>

                <v-window-item value="five">
                    <challenges />
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>

<script>
import explore from '../components/Explore/explore.vue'
import leaderboard from '../components/Explore/leaderboard.vue'
import collections from '../components/Explore/collections.vue'
import journals from '../components/Explore/journals.vue'
import challenges from '../components/Explore/challenges.vue'

    export default {
        components: { explore, leaderboard, collections, journals, challenges },
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