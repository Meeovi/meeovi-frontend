<template>
    <div v-for="(menu, index) in data?.navigations?.nodes" :key="index">
        <h5 class="menuh5">{{ menu?.title }}</h5>
        <v-row>
            <v-col v-for="(item, index) in menu?.menuItems?.menu?.nodes" :key="index" cols="3">
                <v-btn variant="text" stacked :title="item?.title" size="x-small" :href="item?.websiteFields?.link">{{ item?.title }}</v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
const query = gql `
query NewQuery {
  navigations(where: {search: "Account Commerce Menu"}) {
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

/*  const {
    getItemById
  } = useDirectusItems()

  const navsocial = await getItemById({
    collection: "navigation",
    id: 4
  });*/
</script>