<template>
  <div>
    <v-expansion-panels variant="accordion">
      <v-expansion-panel title="Outlets" expand-icon="fas fa-plus" collapse-icon="fas fa-minus" elevation="0">
        <v-expansion-panel-text>
          <v-list v-for="departments in data?.categories?.items" :key="index">
            <div v-for="outlets in departments?.children" :key="index">
              <v-list-item :title="outlets?.name" :value="outlets?.name"
                :href="`/departments/${outlets?.uid}`">
              </v-list-item>
            </div>
          </v-list>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>

</script>

<script setup>
  const query = gql `
query {
  categories (filters: {name: {match: "Outlets"}}) {
    items {
      uid
      name
      children {
        uid
        name
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