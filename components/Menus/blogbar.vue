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
              <div class="card-box align-center" v-for="pages in data.pages" :key="pages.id">
                <h4 class="card-title mbr-fonts-style align-center mb-4 display-1">
                  <strong>{{ pages.name }}</strong></h4>
                <p class="mbr-text mbr-fonts-style mb-4 display-7" v-html="pages.content"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div v-for="(categories, index) in categories" :key="index">
      <v-card>
        <v-tabs bg-color="blue-lighten-4" center-active>
          <v-tab><a href="/blog/">All</a></v-tab>
          <v-tab v-for="(categories, index) in categories[0].tags" :key="index"><a
              :href="`/blog/category/${categories.tags_id.name}`">{{ categories.tags_id.name }}</a></v-tab>
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
    pages (filter: {name: {_eq: "Meeovi Notes"}}) {
      name
      content
      link
      } 
  }
`
  const {
    data
  } = await useAsyncQuery(query)

  const category = gql `
query {
  categories (filter: {name: {_eq: "Notes"}}){
    id
    name
    description
    content
    tags {
      id
      tags_id{
        id
        name
        description
        image {
          filename_disk
        }
      }
    } 
    articles {
      articles_id {
        id
        name
        excerpt
        content
        categories {
          categories_id {
            id
            name
          }
        }
      }
    }
    image {
      filename_disk
    }
  }
}
`
  const {
    data: categories
  } = await useAsyncQuery(category)
</script>