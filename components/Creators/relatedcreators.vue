<template>
    <div>
        <v-sheet class="mx-auto sliderCreators">
            <h4>Check out these Creators</h4>
            <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
                <v-slide-group-item v-for="customers in data.customers.data" :key="customers.id" v-slot="{ isSelected, toggle }">
                    <v-card class="ma-4" height="250" width="250"
                        @click="toggle">
                        <img class="align-end text-white" :src="customers.attributes.Image.data.attributes" cover />
                        <div class="d-flex fill-height align-center justify-center">
                            <v-scale-transition>
                                <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline">
                                </v-icon>
                            </v-scale-transition>
                        </div>
                    </v-card>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
    </div>
</template>

<script>
    export default {
        data: () => ({
            model: null,
        }),
    }
</script>

<script setup>
    const query = gql`
    query {
        customers {
    data {
      attributes {
        Name
        Image {
          data {
            attributes {
              url
            }
          }
        }
        Seller
      }
    }
  }
}`


    const {
        data
    } = useAsyncQuery(query);
</script>