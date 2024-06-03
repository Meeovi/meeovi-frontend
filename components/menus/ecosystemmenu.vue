<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" :scrim="false" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" title="Explore The Meeovi Company">
                    <v-icon start icon="fas fa-bars-staggered"></v-icon>
                </v-btn>
            </template>
            <v-card min-height="500" min-width="500">
                <v-toolbar dark color="primary">
                    <v-btn icon dark @click="dialog = false">
                        <v-icon icon="fas fa-circle-xmark"></v-icon>
                    </v-btn>
                    <v-card-title>
                        <span class="text-h6">The Meeovi Company</span>
                    </v-card-title>
                </v-toolbar>
                <v-row style="padding: 10px;" v-for="navigation in data?.navigations?.nodes" :key="navigation?.id">
                    <v-col cols="3" v-for="menu in navigation?.navigationFields?.menu?.nodes" :key="menu?.id">
                        <a :href="menu?.websiteFields?.link">
                            <v-card class="mx-auto" width="200">
                                <img class="align-center text-white" min-height="280"
                                    :src="`${menu?.websiteFields?.image?.node?.sourceUrl}`" :alt="menu?.websiteFields?.name" cover />
                                <v-card-title>{{ menu?.websiteFields?.name }}</v-card-title>
                            </v-card>
                        </a>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {
        data: () => ({
            dialog: false,
            notifications: false,
            sound: true,
            widgets: false,
            url: process.env.DIRECTUS_URL,
        })
    }
</script>

<script setup>
const query = gql`
query NewQuery {
  navigations(where: {search: "Ecosystemmenu"}) {
    nodes {
      title
      navigationFields {
        menu {
          nodes {
            ... on Website {
              id
              websiteFields {
                link
                type
                description
                name
                image {
                  node {
                    sourceUrl
                  }
                }
              }
              title
            }
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

/*const {
        getItems
    } = useDirectusItems()

    const navigation = await getItems({
        collection: "navigation",
        filter: {
            type: {
                _eq: "ecosystem"
            }
        }
    });*/
</script>