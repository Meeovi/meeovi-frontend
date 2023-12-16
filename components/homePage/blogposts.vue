<template>
  <div>
    <h4 style="padding: 10px;">Articles and Journals from the community</h4>
    <v-sheet class="mx-auto" elevation="0" color="transparent">
      <v-slide-group v-model="productModel" class="pa-4">
        <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }" v-for="articles in data.articles"
          :key="articles">
          <v-card :class="['ma-4', selectedClass]" height="580" width="350" @click="toggle" elevation="0"
            color="transparent">
            <img class="align-end text-white" height="280" :src="`${url}assets/${articles.image.filename_disk}`" :alt="articles.name" cover>
              <v-card-title>{{ articles.name }}</v-card-title>

            <v-card-subtitle class="pt-4">
              Published: {{articles.created_at}}
            </v-card-subtitle>

            <v-card-text>
              <div>Type: <div style="display: inline-block;" v-html="articles.type"></div></div>
              <div v-for="(customer, productIndex) in articles.customers" :key="customer.id">Author: {{ customer.customers_id.username }}</div>

              <div>{{ articles.excerpt }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" :href="`/blog/${articles.id}`">
                Read More
              </v-btn>
            </v-card-actions>

            <div class="d-flex fill-height align-center justify-center">
              <v-scale-transition>
                <v-icon v-if="isSelected" color="white" size="48" icon="fas fa-circle-xmark">
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
  const productModel = ref(null)
  export default {
    data: () => ({
      model: null,
      url: process.env.DIRECTUS_URL,
    }),
    setup() {
      return {
        data,
        error,
        loading,
        productModel,
      }
    },
  }
</script>

<script setup>
const query = gql `
query {
  articles (filter: {isPublic: {_eq: true}}) {
    id
    name
    excerpt
    content
    image {
      filename_disk
    }
    customers {
      customers_id {
        id
        username
      }
    }
    created_at
    type
  }
}
`
  const {
    data
  } = await useAsyncQuery(query)
</script>