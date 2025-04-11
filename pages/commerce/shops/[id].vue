<template>
    <div class="contentPage">
        <v-card variant="text">
          <NuxtImg loading="lazy" class="align-end text-white" height="400" :src="shop?.image?.filename_disk" :alt="shop?.name" cover />
          <h1>Name: <strong>{{ shop?.name }}</strong></h1>
          <h3>Owner: {{ shop?.customers?.customers_id?.username }}</h3>
          <h3>Launched: {{ shop?.user_created }}</h3>
        </v-card>

        <v-row class="productPage">
            <v-col cols="3" v-for="(products, index) in shop?.products?.products_id" :key="index">
                <NuxtLink to="">
                    <v-card class="ma-4" height="380" width="250" @click="toggle">
                        <NuxtImg loading="lazy" class="align-end text-white" height="200" :src="products?.image?.filename_disk" :alt="products?.name" cover />

                        <v-card-title class="pt-4">
                            {{ products?.name }}
                        </v-card-title>

                        <v-card-subtitle>
                            Format: <div v-html="products?.format"></div>
                            Manufacturer: <div v-html="products?.manufacturer"></div>
                        </v-card-subtitle>

                        <v-card-actions>
                            <v-card-title>{{ products?.currency }} {{ products?.price }}</v-card-title>

                            <v-btn color="orange" variant="outlined" prepend-icon="fas fa-shopping-cart">Add to Cart</v-btn>
                        </v-card-actions>
                    </v-card>
                </NuxtLink>
            </v-col>
        </v-row><!---->
    </div>
</template>

<script setup>


  definePageMeta({
    layout: 'nolive',
    middleware: ['authenticated'],
  });

  useHead({
    title: shop?.name,
  })
</script>