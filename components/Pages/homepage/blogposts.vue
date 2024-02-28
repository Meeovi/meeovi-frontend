<template>
  <div>
    <h4 style="padding: 10px;">Articles and Journals from the community</h4>
    <v-sheet class="mx-auto" elevation="0" color="transparent">
      <v-slide-group v-model="productModel" class="pa-4">
        <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }"
          v-for="(articles, index) in data.mpBlogPosts.items" :key="index">
          <div class="item features-image сol-12 col-md-6 col-lg-4">
            <div class="item-wrapper">
              <div class="item-img">
                <img :src="articles.image" :alt="articles.name" cover />
              </div>
              <div class="item-content">
                <h5 class="item-title mbr-fonts-style display-7">
                  <strong>{{ articles.name }}</strong>
                </h5>
                <h6 class="item-subtitle mbr-fonts-style mt-1 display-7">
                  <em>{{ articles.created_at }}</em>
                </h6>
                <h6 class="item-subtitle mbr-fonts-style mt-1 display-7">
                  <em>Author: {{ articles.author_name }}</em>
                </h6>
                <p class="mbr-text mbr-fonts-style mt-3 display-7">{{ articles.short_description }}
                </p>
              </div>
              <div class="mbr-section-btn item-footer mt-2"><a :href="`/blog/${articles.name}`"
                  class="btn btn-primary item-btn display-7">Read More&gt;</a></div>
            </div>
          </div>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
  const productModel = ref(null)
  export default {
    data: () => ({
      model: null,
    }),
    setup() {
      return {
        data,
        error,
        loading,
        productModel,
      }
    },
  }
</script>

<script setup>
  const query = gql `
query
{
  mpBlogPosts(action: "get_post_list") {
    items {
      image
      name
      author_name
      categories {
        items {
          name
        }
      }
      created_at
      short_description
      view_traffic
    }
  }
}`

  const {
    data
  } = useAsyncQuery(query);
</script>