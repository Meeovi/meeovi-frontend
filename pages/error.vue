<template>
  <div>
    <div v-for="page in data?.pages?.nodes" :key="page">
      <section data-bs-version="5.1" class="header4 cid-u48BYncuPn mbr-fullscreen" id="header4-87"
        data-sortbtn="btn-primary" :style="`background: url(${page?.menu?.image?.node?.sourceUrl})`">
        <div class="container">
          <div class="row">
            <div class="content-wrap">
              <h1 class="mbr-section-title mbr-fonts-style mbr-white mb-3 display-1">
                <strong>{{ page?.title }}</strong></h1>

              <p class="mbr-fonts-style mbr-text mbr-white mb-3 display-7" style="color: white !important;"
                v-html="page?.content"></p>

              <div class="mbr-section-btn"><a class="btn btn-primary display-4" href="/">Go Back</a></div>
            </div>
          </div>
        </div>
        <h3 style="padding: 15px;">Since you are here, check these out!</h3>
        <latestproducts />
      </section>
    </div>
    <!---->
  </div>
</template>

<script setup>
  import latestproducts from '../components/related/latestproducts.vue'

  useHead({
    title: 'Error',
  })

  //const route = useRoute();
  const query = gql `
query MyQuery {
  pages(where: {name: "Oops, 404"}) {
    nodes {
      title
      content
      id
      menu {
        image {
          node {
            sourceUrl
          }
        }
      }
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query);
</script>