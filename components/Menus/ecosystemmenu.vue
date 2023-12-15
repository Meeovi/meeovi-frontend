<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" :scrim="false" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props">
                    <v-icon start icon="fas fa-bars-staggered"></v-icon>
                </v-btn>
            </template>
            <v-card min-height="500" min-width="500">
                <v-toolbar dark color="primary">
                    <v-btn icon dark @click="dialog = false">
                        <v-icon icon="fas fa-circle-xmark"></v-icon>
                    </v-btn>
                    <v-card-title>
                        <span class="text-h6">The Meeovi Company</span>
                    </v-card-title>
                </v-toolbar>
                <v-row style="padding: 10px;">
                    <v-col cols="3" v-for="websites in data.websites" :key="websites.id">
                        <a :href="websites.url">
                            <v-card class="mx-auto" width="200">
                                <img class="align-end text-white" height="280" :src="`${url}assets/${websites.image.filename_disk}`" :alt="websites.name" cover />
                                <v-card-title>{{ websites.name }}</v-card-title>

                                <v-card-subtitle class="pt-4">
                                    {{ websites.name }}
                                </v-card-subtitle>
                            </v-card>
                        </a>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {
        data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
                url: process.env.DIRECTUS_URL,
            }
        }
    }
</script>

<script setup>
const query = gql`
query {
  websites (search: "ecosystemmenu") {
    id
    name
    image {
      filename_disk
    }
    url
    type
  }
}
`
const { data } = await useAsyncQuery(query)
</script>