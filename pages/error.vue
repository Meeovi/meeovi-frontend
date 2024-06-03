<template>
  <div>
    <div>
      <section data-bs-version="5.1" class="header4 cid-u48BYncuPn mbr-fullscreen" id="header4-87"
        data-sortbtn="btn-primary">
        <div class="container">
          <div class="row">
            <div class="content-wrap">
              <h1 class="mbr-section-title mbr-fonts-style mbr-white mb-3 display-1">
                <strong>{{ page.name }}</strong></h1>

              <p class="mbr-fonts-style mbr-text mbr-white mb-3 display-7" style="color: white !important;" v-text="page.content"></p>

              <div class="mbr-section-btn"><a class="btn btn-primary display-4" href="/">Go Back</a></div>
            </div>
          </div>
        </div>
      </section>
      <productCard :query="productQuery" />
    </div>
    <!---->
  </div>
</template>

<script>

export default {
  components: { },
  data() {
    return {}
  }
}
</script>

<script setup>
  definePageMeta({
    layout: 'nolive',
  });

  useHead({
    title: 'Error',
  })

const query = gql`
query MyQuery {
cmsPage(identifier: "no-route") {
    content
    title
  }
}
`

    const {
        data
    } = useAsyncQuery(query);
</script>