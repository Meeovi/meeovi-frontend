<template>
    <div>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel title="Meeovi Stores" expand-icon="fas fa-plus" collapse-icon="fas fa-minus" elevation="0">
                <v-expansion-panel-text>
                    <div v-for="meeovistores in meeovistores" :key="meeovistores.id">
                        <v-list-item :title="meeovistores.name" :value="meeovistores.name"
                            :href="`/stores/${meeovistores.id}`">
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
    const {
        getItems
    } = useDirectusItems()

    const meeovistores = await getItems({
        collection: "meeovistores"
    });
</script>