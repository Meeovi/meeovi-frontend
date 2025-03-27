<template>
    <div>
        <v-card elevation="0">
            <v-toolbar title="Update A Showcase"></v-toolbar>
            <v-form @submit.prevent="updateShowcase">
                <v-container>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field v-model="title" label="Showcase Name" required></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-combobox v-model="type" label="Status" :items="['Public', 'Private']"></v-combobox>
                        </v-col>
                        <v-col cols="12">
                            <v-file-input clearable label="Showcase Image"></v-file-input>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea v-model="description" label="Showcase Description"></v-textarea>
                        </v-col>
                        <v-col cols="12">
                            <v-card title="Choose a Product for your Showcase">
                                <v-card-text>
                                    <v-text-field density="compact" variant="solo" label="Search Meeovi for products"
                                        append-inner-icon="fas fa-search" single-line hide-details
                                        @click:append-inner="onClick"></v-text-field>
                                    <v-spacer></v-spacer>
                                    <div class="d-flex pa-4">
                                        <v-checkbox-btn v-model="includeFiles" class="pe-2" color="orange">
                                        </v-checkbox-btn>
                                        <!--<NuxtLink :to="`/product/${products.id}`">
                                        <v-card class="ma-4" height="580" width="250" @click="toggle">
                                            <NuxtImg loading="lazy" class="align-end text-white" height="280"
                                                :src="`${products.featuredAsset.preview}`" :alt="products.name" cover />

                                            <v-card-title class="pt-4">
                                                {{ products.name }}
                                            </v-card-title>

                                            <v-card-text>
                                                <div>Sku: {{ products.variants.sku }}</div>
                                            </v-card-text>

                                            <v-card-actions>
                                                <v-card-title>$ {{ products.variants.price }}
                                                </v-card-title>
                                            </v-card-actions>
                                            <div class="d-flex fill-height align-center justify-center">
                                                <v-scale-transition>
                                                    <v-icon v-if="isSelected" color="white" size="48"
                                                        icon="mdi-close-circle-outline"></v-icon>
                                                </v-scale-transition>
                                            </div>
                                        </v-card>
                                    </NuxtLink>-->
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>

                <v-divider class="mt-12"></v-divider>
                <v-card-actions>
                    <v-btn color="blue-darken-1" variant="text" type="submit" @click.prevent="deleteShowcaseAndRefresh">
                        Delete
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" type="submit" @click.prevent="updateShowcaseAndRefresh">
                        Update
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import { useRoute, useRouter } from 'vue-router';
/*import { UPDATE_SHOWCASE, DELETE_SHOWCASE } from '~/graphql/cms/queries/showcases'

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const dialog = ref(false)
const includeFiles = ref(true)
const enabled = ref(false)
const name = ref('');
const title = ref('');
const color = ref('');
const colortext = ref('');
const showcaseFields = ref('');
const description = ref('');
const image = ref('');
const rating = ref('');
const products = ref('');

const { client: apolloClient } = useApolloClient();

const updateShowcase = async () => {
  try {
    const { data } = await apolloClient.mutate({
      mutation: UPDATE_SHOWCASE,
      variables: {
        name: name.value,
        title: title.value,
        color: showcaseFields.color.value,
        colortext: showcaseFields.colortext.value,
        description: showcaseFields.description.value,
        image: showcaseFields.image.node.sourceUrl,
        id: id,
      },
    });
    console.log('Showcase updated:', data.updateShowcase.showcase);
  } catch (error) {
    console.error('Error updating showcase:', error);
  }
};

const deleteShowcase = async () => {
  try {
    const { data } = await apolloClient.mutate({
      mutation: DELETE_SHOWCASE,
      variables: {
        id: id,
      },
    });
    console.log('Showcase deleted:', data.deleteShowcase.showcase.id);
  } catch (error) {
    console.error('Error deleting showcase:', error);
  }
};

const deleteShowcaseAndRefresh = async () => {
  await deleteShowcase();
  router.push('/product/showcase/showcases');  // Refresh the current route
};

const updateShowcaseAndRefresh = async () => {
  await updateShowcase();
  router.go(0);  // Refresh the current route
};

const reset = () => {
  router.go(0);
};*/

    useHead({
        title: 'Update Showcase',
    })
</script>