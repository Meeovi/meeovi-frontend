<template>
  <div>
    <section data-bs-version="5.1" class="features1 cid-tAGUEKoXKD" id="features1-5y" v-for="(callout, index) in data?.pages?.nodes" :key="index">

      <div class="container">
        <div class="row main align-items-center">
          <div class="col-md-6 image-element ">
            <div class="img-wrap" v-for="(category, index) in data?.productCategories?.nodes" :key="index">
              <img :src="`${category?.image?.soureceUrl}`" :alt="category?.name" />
            </div>
          </div>
          <div class="col-md-6 text-element">
            <div class="text-content">

              <h2 class="mbr-title pt-2 mbr-fonts-style align-center mbr-white display-2">{{ callout?.title }}</h2>
              <div class="mbr-section-text">
                <h4 class="mbr-text pt-3 mbr-light mbr-fonts-style align-center mbr-white display-4" v-html="callout?.content">
                  </h4>
                  <br>
                  <br>
              </div>
              <div class="mbr-section-btn pt-3 align-center"><a class="btn btn-md btn-white display-4" v-for="(category, index) in data?.productCategories?.nodes" :key="index"
                  :href="`/departments/${category?.id}`">Start Reading</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {

  }
</script>

<script setup>
  const query = gql `
query NewQuery {
  pages(where: {name: "Books Callout"}) {
    nodes {
      id
      title
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
  productCategories(where: {name: "Books"}) {
    nodes {
      id
      image {
        sourceUrl
      }
      name
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query);

  /*
  const { getItems } = useDirectusItems()

  const products = await getItems({ collection: "products"});
  const departments = await getItems({ collection: "departments", params: {filter: {name: {_eq: "Yardsale"}}}, limit: 6 });*/
</script>