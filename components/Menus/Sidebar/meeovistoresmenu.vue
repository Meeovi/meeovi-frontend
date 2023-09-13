<template>
    <div>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel title="Meeovi Stores" expand-icon="fas fa-plus" collapse-icon="fas fa-minus" elevation="0">
                <v-expansion-panel-text>
                    <div v-for="stores in data.collections.items" :key="stores.id">
                        <v-list-item :title="stores.children.name" :value="stores.children.name"
                            :href="`/stores/${stores.children.slug}`">
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
  collections (options: {topLevelOnly: false, filter: {name: {eq: "Meeovi Stores"}}}){
    items {
      name
      featuredAsset {
        id
        preview
      }
      children {
        name
        slug
      }
    }
  }
}
`
const { data } = await useAsyncQuery(query)

  /*  const {
        getItems
    } = useDirectusItems()

    const stores = await getItems({
        collection: "stores"
    });*/    
</script>