<template>
	<div class="contentPage">
		<v-toolbar color="transparent">
			<v-toolbar-title>Search Results</v-toolbar-title>
			<v-breadcrumbs :items="['Home', 'Bar', 'Fizz']"></v-breadcrumbs>
		</v-toolbar>
		<v-row class="searchResults">

			<v-col cols="2">
				<searchfilters />
			</v-col>
			<v-col cols="10">
				<v-toolbar color="transparent">
					<p>Sort by:</p>

					<v-btn variant="text">Featured</v-btn>
					<v-btn variant="text">Rating</v-btn>
					<v-btn variant="text">Price</v-btn>
					<v-btn variant="text">Newest Arrivals</v-btn>
					<v-spacer></v-spacer>

					<p>View</p>

					<v-btn variant="text" icon="fas fa-th"></v-btn>
					<v-btn variant="text" icon="fas fa-list"></v-btn>
				</v-toolbar>

				<v-container>
					<v-row>
						<!--<v-col v-for="product in data.products" :key="product.id" cols="12" sm="6" md="4" lg="3">
							<a :href="`/product/${products.id}`">
                            <v-card class="ma-4" height="380" width="250" @click="toggle">
                                <img class="align-end text-white" height="200" :src="`${products.featuredAsset.preview}`" :alt="products.name" cover />
  
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
                        </a>
						</v-col>-->
					</v-row>
				</v-container>
			</v-col>
		</v-row>
	</div>
</template>

<script>
	import searchfilters from '../../components/Search/searchfilters.vue'

	export default {
		components: {
			searchfilters
		},

	}
</script>

<script setup>
/*const query = gql`
 query {
  products (options: {take: 6 sort: {createdAt: DESC}}) {
    items {
      id
      name
      featuredAsset {
        id
        preview
      }
      variants {
        price
        sku
      }
    }
  }
}
`
const { data } = await useAsyncQuery(query)*/
</script>