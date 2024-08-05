<template>
    <div>
        <v-card elevation="0">
            <v-toolbar title="Create A Showcase"></v-toolbar>
            <form @submit.prevent="createShowcase">
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
                                        <!--<a :href="`/product/${products.id}`">
                                        <v-card class="ma-4" height="580" width="250" @click="toggle">
                                            <img class="align-end text-white" height="280"
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
                                    </a>-->
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>

                <v-divider class="mt-12"></v-divider>
                <v-card-actions>
                    <v-btn color="blue-darken-1" variant="text" type="submit" @click="reset = false">
                        Reset
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" type="submit">
                        Create
                    </v-btn>
                </v-card-actions>
            </form>
        </v-card>
    </div>
</template>

<script>
    export default {
        data: () => ({
            dialog: false,
            includeFiles: true,
            enabled: false,
        }),
    }
</script>

<script setup>
import { ref } from 'vue';
import { useApolloClient } from '@vue/apollo-composable';
import { useRoute, useRouter } from 'vue-router';
import gql from 'graphql-tag';

const route = useRoute();
const router = useRouter();

const title = ref('');
const type = ref('');
const description = ref('');
const image = ref('');
const color = ref('');
const colortext = ref('');
const showcaseFields = ref('');

const { client: apolloClient } = useApolloClient();

const CREATE_SHOWCASE = gql`
  mutation CreateShowcase($title: String!) {
    createShowcase(input: {
      title: $title,
      status: PUBLISH,
    }) {
      showcase {
        id
        title
        status
        showcaseFields {
          color
          colortext
          description
          image {
            node {
                sourceUrl
            }
          }
        }
      }
    }
  }
`;

const createShowcase = async () => {
  try {
    const { data } = await apolloClient.mutate({
      mutation: CREATE_SHOWCASE,
      variables: {
        title: title.value,
        status: type.value,
        description: showcaseFields.description.value,
        image: showcaseFields.image.value,
        color: showcaseFields.color.value,
        colortext: showcaseFields.colortext.value,
      },
    });
    console.log('Showcase created:', data.createShowcase.showcase);
  } catch (error) {
    console.error('Error creating showcase:', error);
  }
};

const createShowcaseAndRefresh = async () => {
  await createShowcase();
  router.go(0);  // Refresh the current route
};
</script>