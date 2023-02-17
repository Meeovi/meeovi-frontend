<template>
    <div>
        <v-row>
            <v-col cols="3">
                <v-card class="mx-auto" max-width="400">
                    <v-img class="align-end text-white" height="200" src="/images/logo512alpha.png" cover>
                        <v-card-title>Top 10 Australian beaches</v-card-title>
                    </v-img>
                    <v-card-subtitle class="pt-4">
                        Number 10
                    </v-card-subtitle>
                    <v-card-text>
                        <div>Whitehaven Beach</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="orange">
                            Share
                        </v-btn>
                        <v-btn color="orange">
                            $ 0.00
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {

    }
</script>

<script setup>
    useHead({
        title: '',
    })
</script>