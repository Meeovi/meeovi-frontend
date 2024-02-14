<template>
    <div>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel title="Meeovi Stores" expand-icon="fas fa-plus" collapse-icon="fas fa-minus" elevation="0">
                <v-expansion-panel-text>
                    <div v-for="(stores, index) in data?.categories?.items" :key="index">
                        <v-list-item :title="stores?.children?.name" :value="stores?.children?.name" :href="`/stores/${stores?.children?.name}`"></v-list-item>
                    </div>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
    export default {
        data: () => ({
            model: null,
            url: process.env.DIRECTUS_URL,
        }),
    }
</script>

<script setup>
const query = gql`
query MyQuery {
  categories(filters: {name: {match: "Stores"}}) {
    items {
      children {
        id
        name
        path
      }
    }
  }
}
`

const { data } = await useAsyncQuery(query)
</script>