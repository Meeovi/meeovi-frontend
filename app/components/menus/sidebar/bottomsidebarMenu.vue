<template>
  <div>
    <h5 class="menuh5">{{ topmenu?.name }}</h5>
    <v-list v-for="item in topmenu?.menus" :key="item">
      <v-list-item v-if="item?.active === 'Active' && item?.name !== 'Departments' && item?.name !== 'Outlets'" :title="item?.name" :value="item?.name" :prepend-icon="item?.icon" :href="item?.url"></v-list-item>
    </v-list>
  </div>
</template>

<script setup>
const gateway = useGateway()
const content = gateway.content

const { data: topmenu } = await useAsyncData('topmenu-sidebar-navigation', async () => {
  const item = await content.readItem('navigation', '87')
  return item || { name: '', menus: [] }
})
</script>