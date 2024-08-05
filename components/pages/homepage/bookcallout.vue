<template>
  <div>
    <section data-bs-version="5.1" class="features1 cid-tAGUEKoXKD" id="features1-5y" v-for="(category, index) in data?.categories?.items" :key="index">

      <div class="container">
        <div class="row main align-items-center">
          <div class="col-md-6 image-element ">
            <div class="img-wrap">
              <img :src="`${category?.image}`" :alt="category?.name" />
            </div>
          </div>
          <div class="col-md-6 text-element">
            <div class="text-content">

              <h2 class="mbr-title pt-2 mbr-fonts-style align-center mbr-white display-2">{{ category?.name }}</h2>
              <div class="mbr-section-text">
                <h4 class="mbr-text pt-3 mbr-light mbr-fonts-style align-center mbr-white display-4" v-html="category?.description">
                  </h4>
                  <br>
                  <br>
              </div>
              <div class="mbr-section-btn pt-3 align-center"><a class="btn btn-md btn-white display-4" :href="`/departments/${category?.uid}`">Start Reading</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  const query = gql `
query {
  categories (filters: {category_uid: {eq: "NDE="}}) {
    items {
      uid
      name
      image
      description
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