<template>
    <div>
        <section data-bs-version="5.1" class="info3 cid-skeBLZoXmf" id="info3-7" v-for="callout in data?.pages?.nodes" :key="callout">
            <div class="mbr-overlay" style="opacity: 0.6; background-color: rgb(68, 121, 217);">
            </div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="card col-12 col-lg-10">
                        <div class="card-wrapper">
                            <div class="card-box align-center">
                                <h4 class="card-title mbr-fonts-style align-center mb-4 display-1">
                                    <strong>{{ callout?.title }}</strong></h4>
                                <h4 class="mbr-text mbr-fonts-style mb-4 display-4" v-html="callout?.content"></h4>
                                <div class="mbr-section-btn mt-3"><a class="btn btn-warning display-4" :href="`/blog`">Read on</a></div>
                            </div>
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
const query = gql`
query NewQuery {
  pages(where: {name: "Blog Callout"}) {
    nodes {
      id
      title
      content
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query);

  /*const { getItems } = useDirectusItems()

  //const products = await getItems({ collection: "products"});
  const categories = await getItems({ collection: "categories", params: {filter: {name: {_eq: "Notes"}}} });*/
</script>