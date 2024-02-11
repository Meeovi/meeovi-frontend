<template>
    <div>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel title="Departments" expand-icon="fas fa-plus" collapse-icon="fas fa-minus" elevation="0">
                <v-expansion-panel-text>
                    <v-list v-for="categories in data" :key="index">
                        <v-list-item :title="categories?.items?.children?.name" :value="categories?.items?.children?.name"
                            :href="`/departments/${categories?.items?.children?.name}`">
                        </v-list-item>
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
  categories {
    items {
      id
      name
      children {
        name
      }
    }
  }
}
`

    const {
        data
    } = useAsyncQuery(query);
</script>