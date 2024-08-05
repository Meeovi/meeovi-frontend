<template>
    <div class="livebar">
        <v-card height="75" variant="text">
            <v-tabs v-model="tab" height="75">
                <v-tab>
                    <div class="text-center">
                        <v-dialog v-model="dialog" width="auto">
                            <template v-slot:activator="{ props }">
                                <div class="avatarBorder">
                                    <v-avatar v-bind="props" size="60">
                                        <img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" alt="Live"
                                            cover />
                                    </v-avatar>
                                </div>
                            </template>

                            <v-card min-height="500" min-width="500">
                                <v-row>
                                    <v-col cols="6"><video src="" title="" autoplay controls></video></v-col>
                                    <v-col cols="6">
                                        <disqus />
                                    </v-col>
                                </v-row>

                                <v-card-actions>
                                    <v-btn color="primary" block @click="dialog = false">Close</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </v-tab>
            </v-tabs>
        </v-card>
    </div>
</template>

<script setup>
    /*    const {
        getItems
    } = useDirectusItems()

    const shorts = await getItems({
        collection: "shorts"
    });*/
    import disqus from '~/components/partials/disqus.vue'
    import { ref } from 'vue';
    import { useRuntimeConfig } from '#imports';

    const config = useRuntimeConfig();

    const tab = ref(null);
    const dialog = ref(false);

const query = gql `
query {
  shorts {
    id
    name
    video {
      filename_disk
    }
    customers {
      customers_id {
        id
        username
        image {
          filename_disk
        }
      }
    }
  }
}
`
    const {
        data
    } = await useAsyncQuery(query)
</script>