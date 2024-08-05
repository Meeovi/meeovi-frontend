<template>
    <div>
        <section data-bs-version="5.1" class="people1 cid-u1nHNN1e0D" id="people1-6m">
        <div class="container">

          <div class="user-card">
            <div class="row">
              <div class="col-md-6 col-lg-3">
                <v-avatar size="120">
                  <img :src="`${members?.avatar?.url}`" :alt="members?.username" />
                </v-avatar>
                <div class="user_name mbr-fonts-style display-7">
                  <strong>{{ members?.username}}</strong>
                </div>
                <p class="commentPublishedDate">{{ members?.comments?.nodes?.date }}</p>
              </div>

              <div class="col-12 col-md-6 col-lg-9">
                <div class="description">
                  <div class="user_text">
                    <p class="mbr-fonts-style small display-4">
                      Type: {{ members?.comments?.nodes?.type }}
                    </p>
                    <p class="mbr-fonts-style small display-4">
                      Status: {{ members?.comments?.nodes?.status }}
                    </p>
                    <p class="mbr-fonts-style small display-4">
                      {{ members?.comments?.nodes?.content }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script setup>
const query = gql `
query NewQuery {
  members {
    nodes {
      comments {
        nodes {
          content
          date
          id
          karma
          status
          type
        }
      }
      avatar {
        url
      }
      username
    }
  }
}
`

    const {
        data
    } = useAsyncQuery(query);

    useHead({
        title: 'Replies'
    })
</script>