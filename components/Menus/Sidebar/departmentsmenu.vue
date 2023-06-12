<template>
    <div>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel title="Departments" expand-icon="fas fa-plus" collapse-icon="fas fa-minus" elevation="0">
                <v-expansion-panel-text>
                    <div v-for="categories in data" :key="categories">
                        <v-list-item :title="categories.items.name" :value="categories.items.name"
                            :href="`/departments/${categories.items.uid}`">
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
            uid
            name
            }
        }
    }`


const { data } = useAsyncQuery(query); 
</script>