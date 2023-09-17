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
                    <v-col cols="3" v-for="ecosystemmenu in data" :key="ecosystemmenu.id">
                        <a :href="ecosystemmenu.link">
                            <v-card class="mx-auto" width="200">
                                <img class="align-end text-white" height="200" :src="`${url}/assets/${ecosystemmenu.image}`" cover />
                                <v-card-title>{{ ecosystemmenu.name }}</v-card-title>

                                <v-card-subtitle class="pt-4">
                                    {{ ecosystemmenu.name }}
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
                url: 'http://meeovicms.com:8011'
            }
        }
    }
</script>

<script setup>
const query = gql`
 query {
  ecosystemmenu {
    id
    name
    image {
      filename_disk
    }
  }
}
`
const { data } = await useAsyncQuery(query)

  /*  const {
        getItems
    } = useDirectusItems()

    const ecosystemmenu = await getItems({
        collection: "ecosystemmenu"
    }); */
</script>