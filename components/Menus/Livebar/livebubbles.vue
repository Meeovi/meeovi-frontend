<template>
    <div class="livebar">
        <v-card height="75" variant="text">
            <v-tabs v-model="tab" height="75">
                <v-tab v-for="shorts in data" :key="shorts.id">
                    <div class="text-center">
                        <v-dialog v-model="dialog" width="auto">
                            <template v-slot:activator="{ props }">
                                <v-avatar v-bind="props" size="50" v-for="(shorts, index) in data.shorts[0].customers"
                                :key="index">
                                    <img :src="`${url}assets/${shorts?.customers_id?.image?.filename_disk}`" :alt="shorts?.customers_id?.username" cover />
                                </v-avatar>
                            </template>

                            <v-card min-height="500" min-width="500">
                                <v-row>
                                    <v-col cols="6"><video :src="shorts?.video?.filename_disk" :title="shorts?.name" autoplay controls></video></v-col>
                                    <v-col cols="6">
                                        <comments />
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

<script>
    import comments from '../../user/comments.vue'

    export default {
        components: {
            comments
        },
        data: () => ({
            tab: null,
            dialog: false,
            url: process.env.DIRECTUS_URL,
        }),
    }
</script>

<script setup>
/*    const {
        getItems
    } = useDirectusItems()

    const shorts = await getItems({
        collection: "shorts"
    });*/

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