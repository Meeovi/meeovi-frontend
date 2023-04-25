<template>
    <div>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel title="Categories" expand-icon="fas fa-plus" collapse-icon="fas fa-minus" elevation="0">
                <v-expansion-panel-text>
                    <div v-for="categories in categories" :key="categories.id">
                        <v-list-item :title="categories.name" :value="categories.name"
                            :href="`/categories/${categories.name}`">
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
const { getItems } = useDirectusItems();

const categories = await getItems({ collection: "categories" });
</script>