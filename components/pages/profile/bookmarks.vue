<template>
    <v-card class="mx-auto" max-width="400" v-for="activities in data?.activities?.nodes" :key="activities">
        <v-card-title>{{ activities?.title }}</v-card-title>
        <v-card-subtitle class="pt-4">
            {{ activities?.type }}
        </v-card-subtitle>

        <v-card-text>
            <div>By: {{ activities?.creator?.username }}</div>

            <div>Published: {{ activities?.date }}</div>

            <div>{{ activities?.content }}</div>
        </v-card-text>

        <v-card-actions>
            <v-btn color="rgb(var(--v-theme-primary))!important">
                Share
            </v-btn>

            <v-btn color="rgb(var(--v-theme-primary))!important" :href="`/social/feed/${activities?.id}`">
                Explore
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
const query = gql`
query NewQuery {
  activities(where: {order: DESC, scope: FAVORITES}) {
    nodes {
      component
      content
      date
      id
      type
      title
      status
      creator {
        username
      }
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query);

    useHead({
        title: 'Bookmarks'
    })
</script>