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

<script>
  import createcomment from '../../components/create/social/createcomment.vue'
  import ratingoverview from '../../components/user/comments/ratingoverview.vue'

  export default {
    components: {
      createcomment,
      ratingoverview
    },
    data: () => ({
      rating: null,
    }),
  }
</script>

<script setup>
const route = useRoute();
const query = gql`
query NewQuery ($id: ID!) {
  product(id: $id) {
    averageRating
    content
    date
    description
    id
    name
    onSale
    sku
    slug
    status
    type
    totalSales
    reviews {
      nodes {
        author {
          node {
            avatar {
              url
              rating
            }
            ... on User {
              id
              email
              username
            }
          }
        }
        approved
        content
        date
        id
        karma
        status
        type
        replies {
          nodes {
            agent
            approved
            author {
              node {
                ... on User {
                  id
                  email
                  username
                }
              }
            }
            content
            date
            id
            karma
            type
            status
          }
        }
      }
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query, { id: route.params.id });
/*  const {
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