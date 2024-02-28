<template>
    <div>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel title="My Account" expand-icon="fas fa-plus" collapse-icon="fas fa-minus" elevation="0">
                <v-expansion-panel-text>
                    <v-list-item v-for="(menu, index) in nav?.menus" :key="index" :title="menu?.name" :value="menu?.name" :prepend-icon="menu?.icon" :href="menu?.url"></v-list-item>
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
  const {
    getItemById
  } = useDirectusItems()

  const nav = await getItemById({
    collection: "navigation",
    id: 2
  });
</script>