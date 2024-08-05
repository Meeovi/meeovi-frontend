<template>
    <div>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel title="Departments" expand-icon="fas fa-plus" collapse-icon="fas fa-minus" elevation="0">
                <v-expansion-panel-text>
                    <v-list v-for="departments in data?.productCategories?.nodes" :key="index">
                        <v-list-item :title="departments?.parent?.node?.name" :value="departments?.parent?.node?.name" :href="`/departments/${departments?.parent?.node?.id}`">
                        </v-list-item>
                    </v-list>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script setup>
const query = gql`
query NewQuery {
  productCategories(where: {exclude: "Outlets"}) {
    nodes {
      parent {
        node {
          id
          name
          slug
          uri
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

    const departments = await getItems({
        collection: "departments"
    });*/
</script>