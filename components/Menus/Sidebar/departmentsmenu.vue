<template>
    <div>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel title="Departments" expand-icon="fas fa-plus" collapse-icon="fas fa-minus" elevation="0">
                <v-expansion-panel-text>
                    <div v-for="departments in data.collections.items" :key="departments.id">
                        <v-list-item :title="departments.name" :value="departments.name"
                            :href="`/departments/${departments.slug}`">
                        </v-list-item>
                    </div>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>

</script>

<script setup>
const query = gql`
  query {
  collections(options: { topLevelOnly: true, filter: {name: {notEq: "Related" notContains: "Pages"}}}){
    items {
      id
      name
      slug
      featuredAsset {
        id
        preview
      }
    }
  }
}
`
const { data } = await useAsyncQuery(query)

  /*  const {
        getItems
    } = useDirectusItems()

    const departments = await getItems({
        collection: "departments"
    });*/    
</script>