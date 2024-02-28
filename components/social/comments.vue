<template>
  <div>
    <article class="w-full p-4 border rounded-md">
      <v-row>
        <v-col cols="6">
          <createcomment />
        </v-col>
        <v-col cols="6">
          <ratingoverview />
        </v-col>
      </v-row>
      <section data-bs-version="5.1" class="people1 cid-u1nHNN1e0D" id="people1-6m">
        <div class="container">

          <div class="user-card">
            <div class="row">
              <div class="col-md-6 col-lg-3">
                <v-avatar size="120" v-for="(customer, index) in products?.items?.customers" :key="index">
                  <img :src="customer?.customer_id?.image?.filename_disk" :alt="customer?.customer_id?.username" />
                </v-avatar>
                <div class="user_name mbr-fonts-style display-7">
                  <strong>{{ products?.items?.reviews?.items?.nickname }}</strong>
                </div>
                <p class="commentPublishedDate">{{ products?.items?.reviews?.items?.created_at }}</p>
              </div>

              <div class="col-12 col-md-6 col-lg-9">
                <div class="description">
                  <div class="user_text">
                    <p class="mbr-fonts-style small display-4" v-html="products?.items?.reviews?.items?.text"></p>
                  </div>

                  <div class="user_desk mbr-fonts-style display-4">
                    <span>
                      <v-rating half-increments hover :length="products?.items?.reviews?.items?.ratings_breakdown?.value" :size="32" :model-value="products?.items?.reviews?.items?.ratings_breakdown?.name" color="warning"
                        active-color="warning" /></span>
                  </div>

                  <div class="user_desk mbr-fonts-style display-4">
                    <span>Was this comment helpful? <v-btn prepend-icon="fas fa-thumbs-up" variant="text">({{ products?.items?.reviews?.items?.average_rating }})</v-btn>
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

<script>
  import createcomment from '../../components/user/comments/createcomment.vue'
  import ratingoverview from '../../components/user/comments/ratingoverview.vue'

  export default {
    components: {
      createcomment,
      ratingoverview
    },
  }
</script>

<script setup>
const query = gql `
query MyQuery {
  products(filter: {url_key: {eq: ""}}, search: "") {
    items {
      reviews {
        items {
          text
          summary
          nickname
          created_at
          average_rating
          ratings_breakdown {
            name
            value
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