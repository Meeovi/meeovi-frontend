<template>
  <div>
    <article class="w-full p-4 border rounded-md">
      <section data-bs-version="5.1" class="people1 cid-u1nHNN1e0D" id="people1-6m">
        <div class="container">

          <div class="user-card" v-for="(comments, index) in data?.customer?.items" :key="index">
            <div class="row">
              <div class="col-md-6 col-lg-3">
                <v-avatar size="120">
                  <img src="../../assets/images/team7.jpg" />
                </v-avatar>
                <div class="user_name mbr-fonts-style display-7">
                  <strong>{{ comments?.reviews?.items?.firstname }}</strong>
                </div>
                <p class="commentPublishedDate">{{ comments?.reviews?.items?.created_at }}</p>
              </div>

              <div class="col-12 col-md-6 col-lg-9">
                <div class="description">
                  <div class="user_text">
                    <p class="mbr-fonts-style small display-4" v-html="comments?.reviews?.items?.text"></p>
                  </div>


                  <div class="user_desk mbr-fonts-style display-4">
                    <span>
                      <v-rating half-increments hover :length="comments?.reviews?.items?.ratings_breakdown?.value" :size="32" :model-value="comments?.reviews?.items?.ratings_breakdown?.value" color="warning"
                        active-color="warning" /></span>
                  </div>

                  <div class="user_desk mbr-fonts-style display-4">
                    <span>Was this comment helpful? <v-btn prepend-icon="fas fa-thumbs-up" variant="text">({{ comments?.reviews?.items?.average_rating }})</v-btn>
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
  import createcomment from './comments/createcomment.vue'
  import ratingoverview from './comments/ratingoverview.vue'

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
  customer {
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
    firstname
  }
}

`

    const {
        data
    } = useAsyncQuery(query);
</script>