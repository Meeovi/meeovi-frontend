<template>
  <div>
    <article class="w-full p-4 border rounded-md">
      <v-row>
        <v-col cols="12">
          <disqus />
        </v-col>
      </v-row>
      <section data-bs-version="5.1" class="people1 cid-u1nHNN1e0D" id="people1-6m">
        <div class="container">

          <div class="user-card">
            <div class="row">
              <div class="col-md-6 col-lg-3">
                <v-avatar size="120" v-for="(customer, index) in products?.customers" :key="index">
                  <img :src="customers?.customer_id?.image?.filename_disk" :alt="customers?.customer_id?.username" />
                </v-avatar>
                <div class="user_name mbr-fonts-style display-7">
                  <strong>{{ products?.comments?.name }}</strong>
                </div>
                <p class="commentPublishedDate">{{ products?.comments?.created_at }}</p>
              </div>

              <div class="col-12 col-md-6 col-lg-9">
                <div class="description">
                  <div class="user_text">
                    <p class="mbr-fonts-style small display-4" v-html="products?.comments?.response"></p>
                  </div>

                  <div class="user_desk mbr-fonts-style display-4">
                    <span>
                      <v-rating half-increments hover :length="products?.comments?.ratings_breakdown" :size="32"
                        :model-value="products?.comments?.ratings_breakdown" color="warning" active-color="warning" />
                      </span>
                  </div>

                  <div class="user_desk mbr-fonts-style display-4">
                    <span>Was this comment helpful? <v-btn prepend-icon="fas fa-thumbs-up" variant="text">
                        ({{ products?.comments?.average_rating }})</v-btn>
                      &bull; <v-btn prepend-icon="fas fa-thumbs-down" variant="text">()</v-btn></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script setup>
  import disqus from '~/components/partials/disqus.vue'

 /* const {
    getItems
  } = useDirectusItems()

  const comments = await getItems({
    collection: "comments",
    filter: {
      type: {
        _eq: "Blog"
      }
    }
  });*/
</script>