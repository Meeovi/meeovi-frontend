<template>
  <div>
    <v-sheet class="mx-auto" elevation="8" max-width="800">
      <h4>Related Spaces</h4>
      <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
        <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }"  v-for="(groups, index) in data.groups?.nodes" :key="index">
          <v-card color="grey-lighten-1" :class="['ma-4', selectedClass]" height="200" width="100" @click="toggle" :href="groups?.id">
            <div class="d-flex fill-height align-center justify-center">
              <v-card max-width="400" class="mx-auto">
                <v-container>
                  <v-row dense>
                    <v-col cols="3">
                      <v-card color="#1F7087" theme="dark">
                        <div class="d-flex flex-no-wrap justify-space-between">
                          <div>
                            <v-card-title class="text-h5">
                              {{ groups?.name }}
                            </v-card-title>

                            <v-card-subtitle>Created: {{ groups?.dateCreated }}</v-card-subtitle>
                            <v-card-subtitle># of Members: {{ groups?.totalMemberCount }}</v-card-subtitle>
                            <v-card-subtitle>Status: {{ groups?.status }}</v-card-subtitle>
                            <v-card-subtitle>{{ groups?.description }}</v-card-subtitle>

                            <v-card-actions>
                              <v-btn class="ms-2" variant="outlined" size="small">
                                Access Space
                              </v-btn>
                            </v-card-actions>
                          </div>

                          <v-avatar class="ma-3" size="125" rounded="0">
                            <img :src="groups?.attachmentCover?.full" :alt="groups?.name" cover />
                          </v-avatar>
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
              <v-scale-transition>
                <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline"></v-icon>
              </v-scale-transition>
            </div>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </div>

</template>

<script>
  import productCard from '../commerce/product/productCard.vue'

  export default {
    components: {
      productCard
    },
    data: () => ({
      model: null,
      //url: process.env.DIRECTUS_URL,
    }),
  }
</script>

<script setup>
const query = gql `
query NewQuery {
  groups {
    nodes {
      creator {
        avatar {
          url
        }
        username
      }
      id
      name
      totalMemberCount
      status
      description
      dateCreated
      attachmentCover {
        full
      }
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query);
</script>