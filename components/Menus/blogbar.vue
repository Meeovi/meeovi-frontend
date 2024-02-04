<template>
  <div>
    <section data-bs-version="5.1" class="info3 cid-so8NrSOKu6 mbr-parallax-background" id="info3-28"
      data-sortbtn="btn-primary">
      <div class="mbr-overlay" style="opacity: 0.6; background-color: rgb(68, 121, 217);">
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="card col-12 col-lg-10">
            <div class="card-wrapper">
              <div class="card-box align-center" v-for="cmspage in data" :key="cmspage">
                <div v-html="cmspage.content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div>
      <v-card>
        <v-tabs bg-color="blue-lighten-4" center-active>
          <v-tab><a href="/blog/">All</a></v-tab>
          <v-tab v-for="(categories, index) in data.mpBlogCategories.items" :key="index"><a :href="`/blog/category/${categories.name}`">{{ categories.name }}</a></v-tab>
        </v-tabs>
      </v-card>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tab: null,
        url: process.env.DIRECTUS_URL,
      }
    }
  }
</script>

<script setup>
const query = gql `
    query {
    cmsPage(identifier: "Blog") {
        title
        content
        relative_url
    }
    mpBlogCategories(action: "get_category_list") {
      items {
        name
        path
      }
    }
  }`

    const {
        data
    } = useAsyncQuery(query);
</script>