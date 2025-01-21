<template>
    <v-row>
        <v-col cols="12"><h6>Size</h6></v-col>

        <v-col cols="12">
            <v-select v-model="size" :items="items" label="Select Size" single-line variant="solo"></v-select>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        data() {
            return {
                items: [{
                        name: 'Florida',
                    },
                    {
                        name: 'Georgia',
                    },
                    {
                        name: 'Nebraska',
                    },
                    {
                        name: 'California',
                    },
                    {
                        name: 'New York',
                    },
                ],
            }
        },
    }
</script>