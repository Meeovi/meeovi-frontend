<template>
    <div>
        <section data-bs-version="5.1" class="features1 cid-tAGUEKoXKD" id="features1-5y">




            <div class="container">
                <div class="row main align-items-center">
                    <div class="col-md-6 image-element ">
                        <div class="img-wrap">
                            <img src="../../assets/images/mbr-1920x1102.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-md-6 text-element">
                        <div class="text-content">

                            <h2 class="mbr-title pt-2 mbr-fonts-style align-center mbr-white display-2">Meeovi Books
                            </h2>
                            <div class="mbr-section-text">
                                <p class="mbr-text pt-3 mbr-light mbr-fonts-style align-center mbr-white display-7">Self
                                    Published authors are some of the most creative people in the world. Unchained by
                                    their everflowing creatism and no company telling them what story to write or how it
                                    should be told. Now Meeovi Books provides a place where their sales can be unchained
                                    too.
                                    <br>
                                    <br></p>
                            </div>
                            <div class="mbr-section-btn pt-3 align-center"><a class="btn btn-md btn-white display-4"
                                    href="/categories/books">Start Reading</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <v-row no-gutters>
            <v-col v-for="products in data.products.items" :key="products.uid" cols="3">
                <a :href="`/product/${products.uid}`">
                    <v-card class="ma-4" height="380" width="250" @click="toggle">
                        <v-img class="align-end text-white" height="200" :src="products.image.url" cover></v-img>

                        <v-card-title class="pt-4">
                            {{ products.name }}
                        </v-card-title>

                        <v-card-text>
                            <div>Country of Manufacture: {{ products.country_of_manufacture }}</div>
                            <div>Category: {{ products.categories.name }}</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-card-title>$ {{ products.price_range.maximum_price.regular_price.value }}</v-card-title>
                        </v-card-actions>
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
    const query = gql`
query {
    products(filter: {price: {to: "99.99"}}){
    items {
      uid
      name
      categories {
        name
      }
      price_range {
        maximum_price {
          regular_price {
            currency
            value
          }
        }
      }
      image {
        url
      }
    }
  }
}`

    const {
        data
    } = useAsyncQuery(query);
</script>