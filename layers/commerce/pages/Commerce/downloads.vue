<template>
    <div>
        <profilebar />
        <section data-bs-version="5.1" class="firmm4_features1 features1 cid-uhBuptnWmV" id="features1-9v"
            data-sortbtn="btn-primary">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 title_block">
                        <h3 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                            <strong>Downloads</strong></h3>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="card col-12 col-lg-3 col-md-6 col-sm-6" v-for="(downloads, index) in data?.customer?.downloadableItems?.nodes" :key="index">
                        <div class="card_wrapper">
                            <div class="card-box">
                                <div class="icon_block">
                                    <div class="iconfont-wrapper">
                                        <span class="mbr-iconfont mobi-mbri-cart-full mobi-mbri"></span>
                                    </div>
                                </div>
                                <h5 class="card-title mbr-fonts-style display-7"><strong>{{ downloads?.name }}</strong></h5>
                                <p class="card-text mbr-fonts-style display-4">Access Expires: {{ downloads?.accessExpires }}</p>
                                <p class="card-text mbr-fonts-style display-4">Product Name: {{ downloads?.product?.name }}</p>
                                <p class="card-text mbr-fonts-style display-4">Product Sku: {{ downloads?.product?.sku }}</p>
                                <p class="card-text mbr-fonts-style display-4">Product Type: {{ downloads?.product?.type }}</p>
                                <p class="card-text mbr-fonts-style display-4">Bill to Name:
                                    {{ new Date(memo?.date_created).toLocaleDateString() }}</p>
                                <p class="btn_link mbr-fonts-style display-4"><a :href="downloads?.download?.file" class="text-secondary">View<span class="mobi-mbri mobi-mbri-right mbr-iconfont"></span></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import profilebar from '../../../components/menus/profilebar.vue'
    const productModel = ref(null)

    export default {
        components: {
            profilebar
        },
        data: () => ({
            model: null,
        }),
        setup() {
            return {
                productModel,
            }
        },
    }
</script>

<script setup>
const route = useRoute();
const query = gql `
query NewQuery ($id: ID!) {
  customer(id: $id) {
    displayName
    id
    username
    role
    date
    downloadableItems {
      nodes {
        id
        name
        product {
          id
          image {
            sourceUrl
          }
          name
          sku
          type
          ... on SimpleProduct {
            id
            name
            price
          }
        }
        accessExpires
        download {
          file
          fileType
          name
        }
      }
    }
  }
}
`
const {
        data
    } = useAsyncQuery(query, {
        id: route.params.id
    });

    useHead({
        title: 'My Downloads',
    })

    definePageMeta({
	  //middleware: ['auth-logged-in'],
	})
</script>