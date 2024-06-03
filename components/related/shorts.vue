<template>
    <div v-for="short in data?.videos?.nodes" :key="short">
        <a :href="`/product/video/${short?.id}`">
            <v-sheet class="mx-auto" elevation="0" min-width="800">
                <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
                    <v-slide-group-item v-for="video in short?.videoFields" :key="video"
                        v-slot="{ isSelected, toggle, selectedClass }">
                        <v-card color="grey-lighten-1" :class="['ma-4', selectedClass]" height="200" width="100"
                            @click="toggle">
                            <div class="d-flex fill-height align-center justify-center">
                                <div class="item-img">
                                    <div class="img-wrap">
                                        <img :src="`${video?.thumbnail?.node?.sourceUrl}`"
                                            :alt="video?.videoFile?.name" cover />
                                    </div>
                                </div>
                                <v-scale-transition>
                                    <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline">
                                    </v-icon>
                                </v-scale-transition>
                            </div>
                        </v-card>
                    </v-slide-group-item>
                </v-slide-group>
            </v-sheet>
        </a>
    </div>
</template>

<script>
    export default {
    data() {
      return {
        model: null,
      }
    },
    }
</script>

<script setup>
const query = gql `
query NewQuery {
  videos {
    nodes {
      date
      id
      videoFields {
        description
        name
        type
        videoFile {
          node {
            sourceUrl
          }
        }
        thumbnail {
          node {
            sourceUrl
          }
        }
      }
    }
  }
}
`

    const {
        data
    } = useAsyncQuery(query);
</script>