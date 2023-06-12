<template>
    <div>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel title="Luxury Stores" expand-icon="fas fa-plus" collapse-icon="fas fa-minus" elevation="0">
                <v-expansion-panel-text>
                    <div v-for="categories in data.categories" :key="categories.id">
                        <v-list-item :title="categories.name" :value="categories.name"
                            :href="`/luxurystores/${categories.id}`">
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
        categories {
            items {
            name
            }
        }
    }`


const { data } = useAsyncQuery(query); 
</script>