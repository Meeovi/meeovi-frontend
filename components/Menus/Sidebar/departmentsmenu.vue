<template>
    <div>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel title="Departments" expand-icon="fas fa-plus" collapse-icon="fas fa-minus" elevation="0">
                <v-expansion-panel-text>
                    <div v-for="(categories, index) in data?.categories?.items" :key="index">
                        <v-list-item :title="categories?.children?.name" :value="categories?.children.name"
                            :href="`/departments/${categories?.children?.name}`">
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
query MyQuery {
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