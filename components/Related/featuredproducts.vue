<template>
    <v-sheet class="mx-auto sliderProducts">
        <h4>Featured Products</h4>
        <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="products in data.products.data" :key="products.id"
                v-slot="{ isSelected, toggle }">
                <a :href="products.attributes.id">
                    <v-card class="ma-4" height="380" width="250" @click="toggle">
                        <v-img class="align-end text-white" height="200" :src="`${url}${products.attributes.media}`" cover>
                        </v-img>

                        <v-card-title class="pt-4">
                            {{ products.attributes.Name }}
                        </v-card-title>

                        <v-card-text>
                            <div>By: {{ products.attributes.customers }}</div>
                            <div>Category: {{ products.attributes.category }}</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-card-title>$ {{ products.attributes.price }}</v-card-title>
                        </v-card-actions>
                        <div class="d-flex fill-height align-center justify-center">
                            <v-scale-transition>
                                <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline">
                                </v-icon>
                            </v-scale-transition>
                        </div>
                    </v-card>
                </a>
            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>
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
        products {
            data {
                attributes {
                    Name
                    price
                    media {
                    data {
                        attributes {
                        url
                        }
                    }
                    }
                    customers {
                    data {
                        attributes {
                        Name
                        }
                    }
                    }
                }
            }
  }
}`


    const {
        data
    } = useAsyncQuery(query);
</script>