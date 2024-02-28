<template>
    <div>
        <h5 class="menuh5">{{ nav?.name }}</h5>
        <v-list-item v-for="(menu, index) in nav?.menus" :key="index" :title="menu?.name" :value="menu?.name" :prepend-icon="menu?.icon" :href="menu?.url"></v-list-item>
    </div>
</template>

<script setup>
  const {
    getItemById
  } = useDirectusItems()

  const nav = await getItemById({
    collection: "navigation",
    id: 5
  });
</script>