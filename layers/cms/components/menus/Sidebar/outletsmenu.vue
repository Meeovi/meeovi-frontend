<template>
  <div>
    <v-expansion-panels variant="accordion">
      <v-expansion-panel title="Outlets" expand-icon="fas fa-plus" collapse-icon="fas fa-minus" elevation="0">
        <v-expansion-panel-text>
          <v-list v-for="departments in data?.productCategories?.nodes" :key="index">
            <div v-for="outlets in departments?.children?.nodes" :key="index">
              <v-list-item :title="outlets?.name" :value="outlets?.name"
                :href="`/departments/${outlets?.id}`">
              </v-list-item>
            </div>

          </v-list>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
  const query = gql `
query NewQuery {
  productCategories(where: {search: "Outlets"}) {
    nodes {
      id
      name
      children {
        nodes {
          id
          name
          slug
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