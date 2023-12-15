<template>
    <div>
        <section v-for="pages in data.pages" :key="pages" data-bs-version="5.1" class="header3 cid-sqn8aWIxpX"
            id="header3-15" :style="`background-image:url(${pages.image.filename_disk})`">
            <div class="mbr-overlay" style="opacity: 0.3; background-color: rgb(187, 187, 187);"></div>
            <div class="align-center container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-6">
                        <h1 class="mbr-section-title mbr-fonts-style mb-3 display-1"><strong>{{ pages.name }}</strong>
                        </h1>

                        <p class="mbr-text mbr-fonts-style display-7">{{ pages.content }}</p>

                    </div>
                </div>
            </div>
        </section>

        <v-row>
            <v-col cols="3" v-for="products in productquery.products" :key="products">
                <a :href="`/product/${products.id}`">
                    <v-card class="ma-4" height="580" width="250" @click="toggle">
                        <img class="align-end text-white" height="280" :src="`${products.image.filename_disk}`"
                            :alt="products.name" cover />

                        <v-card-title class="pt-4">
                            {{ products.name }}
                        </v-card-title>

                        <v-card-text>
                            <div>Sku: {{ products.sku }}</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-card-title>$ {{ products.price }}</v-card-title>
                            <v-card-title>Category: {{ products.categories.categories_id.name }}</v-card-title>
                            <v-card-title>Seller: {{ products.customers.customers_id.name }}</v-card-title>
                        </v-card-actions>
                        <div class="d-flex fill-height align-center justify-center">
                            <v-scale-transition>
                                <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline">
                                </v-icon>
                            </v-scale-transition>
                        </div>
                    </v-card>
                </a>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {

    }
</script>

<script setup>
    useHead({
        title: 'Explore'
    })

    const query = gql `
query {
  pages(search: "explore") {
    id
    status
    sort
    name
    content
    link
    list
    type
    image {
      filename_disk
    }
    date_created
  }
}
`
    const {
        data
    } = await useAsyncQuery(query)

    const products = gql `
query {
  products (limit: 50, sort: "-created_at") {
    id
    name
    price
    sku
    image {
      filename_disk
    }
    rating
    tax_class
    stock_status
    websites {
      websites_id {
        name
        url
      }
    }
    weight
    height
    content
    part_number
    format
    file {
      filename_disk
    }
    type
    visibility
    size
    attributes {
      attributes_id {
        id
        default_label
      }
    }
    categories {
      categories_id {
        id
        name
      }
    }
    customers {
      customers_id {
        id
        username
      }
    }
    shops {
      shops_id {
        id
        name
      }
    }
  }
}
`
    const {
        data: productquery
    } = await useAsyncQuery(products)
</script>