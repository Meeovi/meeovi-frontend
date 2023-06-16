<template>
    <div>
        <section data-bs-version="5.1" class="features19 cid-tAGUZsWaoz mbr-parallax-background" id="features12-62">

    

<div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(255, 255, 255);">
</div>
<div class="container">
    <h2 class="mbr-section-title align-left mbr-fonts-style mbr-bold display-2">
        <strong>Latest Reads in Meeovi Books</strong></h2>

    
    <div class="row justify-content-center align-items-start">
        
        <div class="card px-3 py-4 col-md-4">
            <div class="card-wrapper flip-card">
                <div class="card-img">
                    <img src="../../assets/images/07.jpg" alt="">
                    <div class="img-text mbr-text mbr-fonts-style align-center mbr-white display-4">
                         SHOES
                    </div>
                </div>
                <div class="card-box">
                    <h3 class="mbr-title mbr-fonts-style mbr-bold mbr-black align-center display-2">
                        SHOES
                    </h3>
                    <p class="mbr-card-text mbr-fonts-style align-center display-7">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div class="mbr-section-btn align-center pt-3">
                        <a href="#" class="btn btn-md btn-primary display-4">Read More</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="card px-3 py-4 col-md-4">
            <div class="card-wrapper flip-card">
                <div class="card-img">
                    <img src="../../assets/images/08.jpg" alt="">
                    <div class="img-text mbr-text mbr-fonts-style align-center mbr-white display-4">
                         SHOES
                    </div>
                </div>
                <div class="card-box">
                    <h3 class="mbr-title mbr-fonts-style mbr-bold mbr-black align-center display-2">
                        SHOES
                    </h3>
                    <p class="mbr-card-text mbr-fonts-style align-center display-7">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div class="mbr-section-btn align-center pt-3">
                        <a href="#" class="btn btn-md btn-primary display-4">Read More</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="card px-3 py-4 col-md-4">
            <div class="card-wrapper flip-card">
                <div class="card-img">
                    <img src="../../assets/images/09.jpg" alt="">
                    <div class="img-text mbr-text mbr-fonts-style align-center mbr-white display-4">
                         SHOES
                    </div>
                </div>
                <div class="card-box">
                    <h3 class="mbr-title mbr-fonts-style mbr-bold mbr-black align-center display-2">
                        SHOES
                    </h3>
                    <p class="mbr-card-text mbr-fonts-style align-center display-7">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div class="mbr-section-btn align-center pt-3">
                        <a href="#" class="btn btn-md btn-primary display-4">Read More</a>
                    </div>
                </div>
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