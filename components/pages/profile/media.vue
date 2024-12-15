<template>
    <v-row>
        <v-col cols="3" v-for="media in data?.members?.nodes?.mediaItems?.nodes" :key="media">
            <v-card class="mx-auto" max-width="400">
                <NuxtImg loading="lazy" class="align-end text-white" height="280" :src="`${media?.sourceUrl}`" :alt="media?.altText" cover />
                <v-card-title>{{ media?.title }}</v-card-title>

                <v-card-subtitle class="pt-4">
                    Created: {{ media?.date }}
                </v-card-subtitle>

                <v-card-text>
                    <div>Type: {{ media?.mediaType}}</div>

                    <div>Filesize: {{ media?.fileSize}}</div>

                    <div>Status: {{ media?.status}}</div>

                    <div>{{ media?.description }}</div>
                </v-card-text>

                <v-card-actions>
                    <v-btn color="rgb(var(--v-theme-primary))!important">
                        Share
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
const query = gql `
query NewQuery {
  members {
    nodes {
      mediaItems {
        nodes {
          altText
          caption
          date
          description
          fileSize
          id
          mediaDetails {
            file
            height
            width
          }
          modified
          mediaType
          slug
          sourceUrl
          status
          title
        }
      }
    }
  }
}
`

    const {
        data
    } = useAsyncQuery(query);

    useHead({
        title: 'Media'
    })
</script>