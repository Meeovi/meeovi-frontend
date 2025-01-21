<template>
    <v-row>
        <v-col cols="12">
            <h6>Color</h6>
        </v-col>

        <v-col cols="12">
            <v-container>
                <v-row>
                    <v-col cols="auto">
                        <v-btn density="compact" color="red" icon="mdi-plus"></v-btn>
                    </v-col>
                </v-row>
            </v-container>
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