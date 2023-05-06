<template>
    <div>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel title="Departments" expand-icon="fas fa-plus" collapse-icon="fas fa-minus" elevation="0">
                <v-expansion-panel-text>
                    <div v-for="departments in data.departments.data" :key="departments.id">
                        <v-list-item :title="departments.attributes.Name" :value="departments.attributes.Name"
                            :href="`/departments/${departments.id}`">
                        </v-list-item>
                    </div>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>

export default {
    
}
</script>

<script setup>
const query = gql`
    query {
      departments {
        data {
            id 
            attributes {
                Name
            }
        }
    }
}`


const { data } = useAsyncQuery(query);
</script>