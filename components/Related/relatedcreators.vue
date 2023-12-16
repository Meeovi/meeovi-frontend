<template>
    <div>
        <v-sheet class="mx-auto sliderCreators">
            <h4>Check out these Creators</h4>
            <v-slide-group v-model="model" class="pa-4" center-active>
                <v-slide-group-item v-for="customers in data.customers" :key="customers.id" v-slot="{ isSelected, toggle }">
                    <a :href="`/Admin/User/${customers.id}`">
                        <v-card class="ma-4" @click="toggle">
                            <img class="align-end text-white" :src="`${url}assets/${customers.image.filename_disk}`" :alt="customers.name"
                                cover />
                            <div class="d-flex fill-height align-center justify-center">
                                <v-scale-transition>
                                    <v-icon v-if="isSelected" color="white" size="48" icon="fas fa-circle-xmark"></v-icon>
                                </v-scale-transition>
                            </div>
                        </v-card>
                    </a>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
    </div>
</template>

<script>
    export default {
        data: () => ({
            model: null,
            url: process.env.DIRECTUS_URL,
        }),
    }
</script>

<script setup>
const query = gql `
query {
    customers (filter: {type: {_contains: "Seller"}}){
        id
        first_name
        last_name
        username
        image {
        filename_disk
        }
    }
  }
`

  const {
    data
  } = useAsyncQuery(query)
    //const { data } = await useAsyncQuery(customers)

    /*   const {
           getItems
       } = useDirectusItems()

       const customers = await getItems({ collection: "customers", params: {filter: {type: {_eq: "Seller"}}}});*/
</script>