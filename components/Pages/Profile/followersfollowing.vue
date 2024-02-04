<template>
    <div class="contentPage">
    <v-card>
        <v-tabs v-model="tab" bg-color="primary" fixed-tabs center-active>
            <v-tab value="one">Followers</v-tab>
            <v-tab value="two">Following</v-tab>
        </v-tabs>

        <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="one">
                    <followers />
                </v-window-item>

                <v-window-item value="two">
                    <following />
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
    </div>
</template>

<script>
    import followers from './followers.vue'
    import following from './following.vue'

    export default {
        components: {
            followers,
            following
        },
        data: () => ({
            tab: 'option-1',
        }),
    }
</script>

<script setup>


    useHead({
        title: 'Followers / Following',
    })
</script>

<style scoped>

</style>