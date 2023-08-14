<template>
    <div>
        <v-toolbar title="Meeovi Live" color="orange"></v-toolbar>
        <v-row class="livefeed">
            <v-col cols="4">
                <div class="text-center">
                    <v-dialog v-model="dialog" width="auto" v-for="shorts in shorts" :key="shorts.id">
                        <template v-slot:activator="{ props }">
                            <v-avatar size="180" v-bind="props">
                                <img :src="`${url}/assets/shorts.video`" :alt="shorts.name" />
                            </v-avatar>
                        </template>

                        <v-card>
                            <video :src="`${url}/assets/${shorts.video}`" autoplay></video>
                            <v-card-actions>
                                <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </div>
            </v-col>
        </v-row>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dialog: false,
                url: 'http://meeovicms.com:8011'
            }
        },
    }
</script>

<script setup>
const { getItems } = useDirectusItems()

const shorts = await getItems({ collection: "shorts"});

    useHead({
        title: 'Meeovi Shorts',
    })
</script>